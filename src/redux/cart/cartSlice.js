import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  cartId: null,
  itemCount: 0,
  totalPrice: 0,
};
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart(state, action) {
      state.cart = action.payload;
    },
    setCartCount(state, action) {
      state.itemCount = action.payload;
    },
    setCartId(state, action) {
      state.cartId = action.payload;
    },
    setTotalPrice(state, action) {
      state.totalPrice = action.payload;
    },
    cleanCart(state, action) {
      return initialState;
    },
  },
});
export const { setCart, setCartCount, setCartId, setTotalPrice, cleanCart } =
  cartSlice.actions;
export default cartSlice.reducer;
