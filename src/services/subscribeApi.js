import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { baseQuery } from './configApi';

export const subscribeApi = createApi({
  reducerPath: 'subscribeApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    subscribe: builder.mutation({
      query(data) {
        console.log('subscribe data', data);
        return {
          url: 'incomings',
          method: 'POST',
          body: data,
        };
      },
    }),
  }),
});
export const { useSubscribeMutation } = subscribeApi;
