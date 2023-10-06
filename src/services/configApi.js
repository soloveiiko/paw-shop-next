import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = `https://dropshop.demka.online/api/`;

export const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers) => {
    headers.set('sHost', 'paw.shop');
    headers.set('Accept', 'application/json');
    headers.set('Cache-Control', 'no-cache');
    return headers;
  },
});
