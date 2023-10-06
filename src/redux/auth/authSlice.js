import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  access_token: null,
  token_type: null,
  user: null,
  isAuth: false,
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action) {
      state.access_token = action.payload.access_token;
      state.token_type = action.payload.token_type;
      state.user = action.payload.user;
      state.isAuth = true;
    },
    removeUser: () => initialState,
  },
  // updateUser(state, action)
});

export const { setUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
