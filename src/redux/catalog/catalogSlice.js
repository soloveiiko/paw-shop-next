import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  catalog: null,
};
export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setCatalog(state, action) {
      state.catalog = action.payload;
    },
  },
});
export const { setCatalog } = catalogSlice.actions;
export const selectCatalog = (state) => state.catalog;
export default catalogSlice.reducer;
