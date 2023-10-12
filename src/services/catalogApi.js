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
    getProductsByParams: builder.query({
      query: (data) => {
        return {
          url: `variations/`,
          method: `GET`,
          params: data,
        };
      },
    }),
    getProductItem: builder.query({
      query: (data) => {
        return {
          url: `variation/${data}`,
          method: `GET`,
        };
      },
    }),
  }),
});
export const {
  useGetProductsByParamsQuery,
  useGetProductItemQuery,
  util: { getRunningQueriesThunk },
} = catalogApi;
export const { getProductsByParams, getProductItem } = catalogApi.endpoints;
