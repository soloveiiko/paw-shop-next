import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null,
  shipping: {},
  payment: {},
};
export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setCheckoutData(state, action) {
      state.email = action.payload.email;
      state.shipping = action.payload.shipping;
      state.payment = action.payload.payment;
    },
  },
});
export const { setCheckoutData } = checkoutSlice.actions;
export default checkoutSlice.reducer;
