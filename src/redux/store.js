import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { authApi } from '@services/authApi';
import { productApi } from '@services/productApi';
import { reviewApi } from '@services/reviewApi';
import { subscribeApi } from '@services/subscribeApi';
import { userApi } from '@services/userApi';
import { cartApi } from '@services/cartApi';
import { checkoutApi } from '@services/checkoutApi';
import authSlice from './auth/authSlice';
import modalsSlice from './modals/modalsSlice';
import subscribeSlice from './subscribe/subscribeSlice';
import catalogSlice from './catalog/catalogSlice';
import cartSlice from './cart/cartSlice';
import checkoutSlice from './checkout/checkoutSlice';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [reviewApi.reducerPath]: reviewApi.reducer,
    [subscribeApi.reducerPath]: subscribeApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [checkoutApi.reducerPath]: checkoutApi.reducer,
    modals: modalsSlice,
    auth: authSlice,
    subscribe: subscribeSlice,
    catalog: catalogSlice,
    cart: cartSlice,
    checkout: checkoutSlice,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      userApi.middleware,
      subscribeApi.middleware,
      productApi.middleware,
      reviewApi.middleware,
      cartApi.middleware,
      checkoutApi.middleware,
    ]),
});

setupListeners(store.dispatch);
