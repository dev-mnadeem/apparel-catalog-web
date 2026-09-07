import { describe, it, expect } from 'vitest';
import { cartReducer, parseStoredCart, type CartItem, type CartState } from './cart';
const empty: CartState = { items: [], totalItems: 0, totalPrice: 0 };
const product = (designId?: number): Omit<CartItem, 'quantity'> => ({ id: 10, name: 'Scarf', price: 'Rs.1,250', image: '/fixture.png', category: 'Scarves', ...(designId === undefined ? {} : { selectedDesign: { id: designId, name: 'Design '+designId, image: '/fixture.png' } }) });
function twoVariants() {
 let state=cartReducer(empty,{type:'ADD_ITEM',payload:product(1)});
 return cartReducer(state,{type:'ADD_ITEM',payload:product(2)});
}
describe('design-specific cart operations',()=>{
 it('increments only the chosen design and calculates its total',()=>{
  const state=cartReducer(twoVariants(),{type:'UPDATE_QUANTITY',payload:{id:10,designId:1,quantity:3}});
  expect(state.items.map(item=>item.quantity)).toEqual([3,1]);expect(state.totalItems).toBe(4);expect(state.totalPrice).toBe(5000);
 });
 it('removes one variant while preserving the other',()=>{
  const state=cartReducer(twoVariants(),{type:'REMOVE_ITEM',payload:{id:10,designId:1}});
  expect(state.items).toHaveLength(1);expect(state.items[0].selectedDesign?.id).toBe(2);
 });
 it('identifies a variant by its ID even when display metadata changes',()=>{
  const state=cartReducer(twoVariants(),{type:'ADD_ITEM',payload:{...product(1),selectedDesign:{id:1,name:'Renamed',image:'/new.png'}}});
  expect(state.items).toHaveLength(2);expect(state.items[0].quantity).toBe(2);
 });
 it('rejects fractional and unbounded quantities',()=>{
  const state=twoVariants();for(const quantity of [NaN,1.5,100,Infinity]) expect(cartReducer(state,{type:'UPDATE_QUANTITY',payload:{id:10,designId:1,quantity}})).toBe(state);
 });
 it('filters malformed stored values instead of breaking the page',()=>{
  expect(parseStoredCart({items:[]})).toEqual([]);
  expect(parseStoredCart([null,{}, {...product(),quantity:-1},{...product(),price:'bad',quantity:1}])).toEqual([]);
  expect(parseStoredCart([{...product(),quantity:2}])).toHaveLength(1);
 });
});
