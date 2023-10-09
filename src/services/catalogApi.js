import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { baseQuery } from './configApi';
import { HYDRATE } from 'next-redux-wrapper';

export const catalogApi = createApi({
  reducerPath: 'catalogApi',
  baseQuery: baseQuery,
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    products: builder.query({
      query: () => `variations/`,
    }),
    productItem: builder.query({
      query: (slug) => `variations?category=${slug}`,
    }),
  }),
});
export const { useProductsQuery, useProductItemQuery } = catalogApi;
export const { getProducts, getProductItem } = catalogApi.endpoints;
