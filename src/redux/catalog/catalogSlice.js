import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  catalog: null,
};
export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setCatalog(state, action) {
      state.catalog = action.payload.catalog;
    },
  },
});
export const { setCatalog } = catalogSlice.actions;
export default catalogSlice.reducer;
