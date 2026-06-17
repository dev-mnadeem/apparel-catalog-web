import { afterEach, it, expect, vi } from 'vitest';
import { notificationService } from './notifications';
const order={orderId:'fixture',customerName:'Demo',phoneNumber:'123456789',email:'demo@example.test',items:[],total:'Rs.0'};
afterEach(()=>vi.unstubAllGlobals());
it('sends one request and reports each delivered channel separately',async()=>{
 const fetch=vi.fn(async()=>new Response(JSON.stringify({delivered:['whatsapp']})));vi.stubGlobal('fetch',fetch);
 const result=await notificationService.sendOrderConfirmation(order);
 expect(fetch).toHaveBeenCalledTimes(1);expect(result).toMatchObject({whatsappSent:true,emailSent:false,success:true});
});
it('does not report success on empty delivery or failed HTTP requests',async()=>{
 for(const response of [new Response(JSON.stringify({delivered:[]})),new Response('{}',{status:503})]){
  vi.stubGlobal('fetch',vi.fn(async()=>response));expect((await notificationService.sendOrderConfirmation(order)).success).toBe(false);
 }
});
it('contains a transport failure without exposing provider errors',async()=>{
 vi.stubGlobal('fetch',vi.fn(async()=>{throw new Error('provider-private-detail')}));
 const result=await notificationService.sendOrderConfirmation(order);expect(result.success).toBe(false);expect(JSON.stringify(result)).not.toContain('provider-private-detail');
});
