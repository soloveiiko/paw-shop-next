import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { catalogApi } from '@services/catalogApi';
import { reviewApi } from '@services/reviewApi';
import { subscribeApi } from '@services/subscribeApi';
import modalsSlice from './modals/modalsSlice';
import subscribeSlice from './subscribe/subscribeSlice';
import catalogSlice from './catalog/catalogSlice';
import process from 'next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss';
import { createWrapper } from 'next-redux-wrapper';
const makeStore = () =>
  configureStore({
    reducer: {
      [catalogApi.reducerPath]: catalogApi.reducer,
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
        catalogApi.middleware,
        reviewApi.middleware,
      ]),
  });
export const wrapper = createWrapper(makeStore, { debug: true });
