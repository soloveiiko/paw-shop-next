import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { baseQuery } from './configApi';

export const productApi = createApi({
  reducerPath: 'catalogApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    products: builder.query({
      query(body) {
        return {
          url: `variations`,
          method: 'GET',
          params: body,
        };
      },
    }),
    productItem: builder.query({
      query(slug) {
        return {
          url: `variation/${slug}`,
          method: 'GET',
        };
      },
    }),
  }),
});
export const {
  useProductsQuery,
  useLazyProductsQuery,
  useLazyProductItemQuery,
} = productApi;
