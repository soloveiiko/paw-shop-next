import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { baseQuery } from '@services/configApi';

export const checkoutApi = createApi({
  reducerPath: 'checkoutApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    checkout: builder.mutation({
      query(data) {
        console.log('checkoutApi', data);
        return {
          url: 'carts/checkout',
          method: 'POST',
          body: data,
        };
      },
    }),
  }),
});
export const { useCheckoutMutation } = checkoutApi;
