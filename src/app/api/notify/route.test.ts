import { beforeEach, afterEach, it, expect, vi } from 'vitest';
import { NextRequest } from 'next/server';
beforeEach(()=>{vi.resetModules();vi.stubEnv('NOTIFICATION_SERVICE_TOKEN','local-test-only-internal-token');vi.stubEnv('EMAIL_API_KEY','');vi.stubEnv('WHATSAPP_ACCESS_TOKEN','');});
afterEach(()=>{vi.unstubAllEnvs();vi.unstubAllGlobals();});
const request=(payload:unknown,authorized=true)=>new NextRequest('http://localhost/api/notify',{method:'POST',headers:{'Content-Type':'application/json',...(authorized?{Authorization:'Bearer local-test-only-internal-token'}:{})},body:JSON.stringify(payload)});
it('rejects unauthenticated sending before calling a provider',async()=>{
 const fetch=vi.fn();vi.stubGlobal('fetch',fetch);const {POST}=await import('./route');
 expect((await POST(request({order:{}},false))).status).toBe(401);expect(fetch).not.toHaveBeenCalled();
});
it('rejects null and malformed recipients without a server error',async()=>{
 const {POST}=await import('./route');
 for(const body of [null,[],{order:{},email:'not-an-email'},{order:{},phone:{}}]) expect((await POST(request(body))).status).toBe(400);
});
it('keeps unconfigured providers honest',async()=>{
 const {POST}=await import('./route');const response=await POST(request({order:{orderId:'fixture'},email:'demo@example.test',phone:'123456789'}));
 expect(response.status).toBe(200);expect((await response.json()).delivered).toEqual([]);
});
