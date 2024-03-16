import { createContext } from 'react';

const CartContext = createContext({ // spread
  items: [],
  additem: item => {},
  removeItem: id => {}
})

 export function CartContextProvider({children}) { // manage
  return <CartContextProvider></CartContextProvider>
}

export default CartContext;