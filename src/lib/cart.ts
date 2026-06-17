export interface CartItem {
  id: number
  name: string
  price: string
  originalPrice?: string
  image: string
  quantity: number
  category: string
  selectedDesign?: {
    id: number
    name: string
    image: string
  }
}

export interface CartState {
  items: CartItem[]
  totalItems: number
  totalPrice: number
}

export type CartAction =
  | { type: 'ADD_ITEM'; payload: Omit<CartItem, 'quantity'> }
  | { type: 'REMOVE_ITEM'; payload: { id: number; designId?: number } }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number; designId?: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; payload: CartItem[] }

export function parseStoredCart(value: unknown): CartItem[] {
  if (!Array.isArray(value)) return [];
  return value.slice(0, 100).filter((item): item is CartItem => {
    if (!item || typeof item !== 'object') return false;
    const price = typeof item.price === 'string' ? Number(item.price.replace(/Rs\.?|,/gi, '').trim()) : NaN;
    return Number.isInteger(item.id) && typeof item.name === 'string' &&
      Number.isFinite(price) && price >= 0 && Number.isInteger(item.quantity) && item.quantity > 0 && item.quantity <= 99 &&
      typeof item.image === 'string' && typeof item.category === 'string' &&
      (item.selectedDesign === undefined || (item.selectedDesign && Number.isInteger(item.selectedDesign.id) && typeof item.selectedDesign.name === 'string' && typeof item.selectedDesign.image === 'string'));
  });
}

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item =>
        item.id === action.payload.id &&
        item.selectedDesign?.id === action.payload.selectedDesign?.id
      )

      if (existingItem?.quantity === 99) return state;
      if (existingItem) {
        const updatedItems = state.items.map(item =>
          item.id === action.payload.id &&
          item.selectedDesign?.id === action.payload.selectedDesign?.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
        return {
          ...state,
          items: updatedItems,
          totalItems: state.totalItems + 1,
          totalPrice: calculateTotalPrice(updatedItems)
        }
      } else {
        const newItem = { ...action.payload, quantity: 1 }
        const updatedItems = [...state.items, newItem]
        return {
          ...state,
          items: updatedItems,
          totalItems: state.totalItems + 1,
          totalPrice: calculateTotalPrice(updatedItems)
        }
      }
    }

    case 'REMOVE_ITEM': {
      const updatedItems = state.items.filter(item => !(item.id === action.payload.id && item.selectedDesign?.id === action.payload.designId))
      return {
        ...state,
        items: updatedItems,
        totalItems: updatedItems.reduce((sum, item) => sum + item.quantity, 0),
        totalPrice: calculateTotalPrice(updatedItems)
      }
    }

    case 'UPDATE_QUANTITY': {
      if (!Number.isInteger(action.payload.quantity) || action.payload.quantity > 99) return state;
      if (action.payload.quantity <= 0) {
        return cartReducer(state, { type: 'REMOVE_ITEM', payload: { id: action.payload.id, designId: action.payload.designId } })
      }

      const updatedItems = state.items.map(item =>
        item.id === action.payload.id && item.selectedDesign?.id === action.payload.designId
          ? { ...item, quantity: action.payload.quantity }
          : item
      )
      return {
        ...state,
        items: updatedItems,
        totalItems: updatedItems.reduce((sum, item) => sum + item.quantity, 0),
        totalPrice: calculateTotalPrice(updatedItems)
      }
    }

    case 'CLEAR_CART':
      return {
        items: [],
        totalItems: 0,
        totalPrice: 0
      }

    case 'LOAD_CART': {
      const items = parseStoredCart(action.payload);
      const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
      return {
        items,
        totalItems,
        totalPrice: calculateTotalPrice(items)
      }
    }

    default:
      return state
  }
}

function calculateTotalPrice(items: CartItem[]): number {
  return items.reduce((total, item) => {
    const price = Number(item.price.replace(/Rs\.?|,/gi, '').trim())
    return total + (price * item.quantity)
  }, 0)
}
