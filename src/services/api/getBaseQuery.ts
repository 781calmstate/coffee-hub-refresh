import { fetchBaseQuery } from '@reduxjs/toolkit/query';

import { environmentVariables } from '@/config';

import { store } from '../../store';

export const getBaseQuery = fetchBaseQuery({
  baseUrl: environmentVariables.API_URL,
  credentials: 'include',
  prepareHeaders: headers => {
    const { token } = store.getState().auth;

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  },
  timeout: 60000,
});
