import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  subscribe: null,
};
export const subscribeSlice = createSlice({
  name: 'subscribe',
  initialState,
  reducers: {
    setSubscribe(state, action) {
      state.subscribe = action.payload.subscribe;
    },
  },
});
export const { setSubscribe } = subscribeSlice.actions;
export default subscribeSlice.reducer;
