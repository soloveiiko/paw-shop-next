import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { baseQuery } from './configApi';

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: baseQuery,
  tagTypes: ['Cart'],
  endpoints: (builder) => ({
    cart: builder.query({
      query() {
        return {
          url: `carts`,
          method: 'GET',
        };
      },
      providesTags: ['Cart'],
    }),
    addToCart: builder.mutation({
      query({ data, id }) {
        console.log('cart data', data);
        return {
          url: `carts/${id}/add`,
          method: 'POST',
          body: data,
        };
      },
      invalidatesTags: ['Cart'],
    }),
    removeFromCart: builder.mutation({
      query({ data, id }) {
        console.log('cart data', data);
        return {
          url: `carts/${id}/remove`,
          method: 'POST',
          body: data,
        };
      },
      invalidatesTags: ['Cart'],
    }),
  }),
});
export const { useCartQuery, useAddToCartMutation, useRemoveFromCartMutation } =
  cartApi;
