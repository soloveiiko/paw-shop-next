import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { baseQuery } from './configApi';
import { catalogApi } from '@services/catalogApi';
import { HYDRATE } from 'next-redux-wrapper';

export const pagesApi = createApi({
  reducerPath: 'pagesApi',
  baseQuery: baseQuery,
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getPage: builder.query({
      query(slug) {
        return {
          url: `pages/${slug}`,
          method: 'GET',
        };
      },
    }),
  }),
});
export const {
  useGetPageQuery,
  util: { getRunningQueriesThunk },
} = pagesApi;
export const { getPage } = pagesApi.endpoints;
