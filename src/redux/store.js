import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { productApi } from '@services/productApi';
import { reviewApi } from '@services/reviewApi';
import { subscribeApi } from '@services/subscribeApi';
import modalsSlice from './modals/modalsSlice';
import subscribeSlice from './subscribe/subscribeSlice';
import catalogSlice from './catalog/catalogSlice';
import process from 'next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss';

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [reviewApi.reducerPath]: reviewApi.reducer,
    [subscribeApi.reducerPath]: subscribeApi.reducer,
    modals: modalsSlice,
    subscribe: subscribeSlice,
    catalog: catalogSlice,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      subscribeApi.middleware,
      productApi.middleware,
      reviewApi.middleware,
    ]),
});

setupListeners(store.dispatch);
