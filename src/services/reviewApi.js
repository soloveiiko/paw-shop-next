import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { baseQuery } from './configApi';
import { HYDRATE } from 'next-redux-wrapper';

export const reviewApi = createApi({
  reducerPath: 'reviewApi',
  baseQuery: baseQuery,
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    reviews: builder.query({
      query(body) {
        return {
          url: 'comments/products/random',
          method: 'GET',
          params: body,
        };
      },
    }),
    getProductReviews: builder.query({
      query({ id, params }) {
        return {
          url: `comments/products/${id}`,
          method: 'GET',
          params: params,
        };
      },
    }),
    addReviews: builder.mutation({
      query({ data, id }) {
        return {
          url: `comments/products/${id}`,
          method: 'POST',
          body: data,
        };
      },
    }),
  }),
});
export const {
  useGetProductReviewsQuery,
  util: { getRunningQueriesThunk },
} = reviewApi;
export const { getProductReviews } = reviewApi.endpoints;
