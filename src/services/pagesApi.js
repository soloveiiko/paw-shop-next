import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { baseQuery } from './configApi';

export const pagesApi = createApi({
  reducerPath: 'pagesApi',
  baseQuery: baseQuery,

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
export const { useGetPageQuery } = pagesApi;
