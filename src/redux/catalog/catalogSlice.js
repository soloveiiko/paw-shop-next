import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

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
  extraReducers: {
    [HYDRATE]: (state, action) => {
      if (!action.payload.catalog.catalog) {
        return state;
      }

      state.catalog = action.payload.catalog.catalog;
    },
  },
});
export const { setCatalog } = catalogSlice.actions;
export const selectCatalog = (state) => state.catalog;
export default catalogSlice.reducer;
