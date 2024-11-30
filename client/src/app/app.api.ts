import { BaseQueryFn, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { logOut } from './auth/auth.slice';

export const BASE_URL = 'http://localhost:8000/';

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers: any, { getState }) => {
    const accessToken = getState()?.auth?.accessToken;

    console.debug({ accessToken });
    headers.set('Accept', 'application/json');

    if (accessToken) {
      headers.set('Authorization', `Bearer ${accessToken}`);
    }
    return headers;
  },
});

const baseQueryWithAuth: BaseQueryFn = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    api.dispatch({ type: 'auth/logOut' });
    localStorage.removeItem('accessToken');
  }
  return result;
};

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithAuth,
  endpoints: () => ({}),
});
