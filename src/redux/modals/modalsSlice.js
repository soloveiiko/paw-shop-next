import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  authModal: false,
  cartModal: false,
  sidebar: false,
};

export const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    openAuthModal: (state, action) => {
      state.authModal = action.payload;
    },
    openCartModal: (state, action) => {
      state.cartModal = action.payload;
    },
    openSidebar: (state, action) => {
      state.sidebar = action.payload;
    },
  },
});

export const { openAuthModal, openCartModal, openSidebar } = modalsSlice.actions;

export default modalsSlice.reducer;
