import { createApi } from '@reduxjs/toolkit/query/react';

import { getBaseQuery } from '../getBaseQuery';
import type { Post } from './types';

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: getBaseQuery,
  tagTypes: ['posts'],
  endpoints: builder => ({
    getPosts: builder.query<Post[], void>({
      query: () => `/posts`,
      providesTags: ['posts'],
    }),
  }),
});

export const { useGetPostsQuery } = postApi;
