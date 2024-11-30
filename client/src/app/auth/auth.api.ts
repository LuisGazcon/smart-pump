import { api } from '@/app/app.api';

import { RequestMethod } from '@/utils/request-method';

export const authApi = api.enhanceEndpoints({ addTagTypes: [] }).injectEndpoints({
  overrideExisting: false,
  endpoints: (builder) => ({
    logIn: builder.mutation({
      query: ({ email, password }: { email: string; password: string }) => ({
        url: 'auth/login',
        method: RequestMethod.POST,
        body: {
          email,
          password,
        },
      }),
    }),
    signUp: builder.mutation({
      query: (body: any) => ({
        url: 'auth/signup',
        method: RequestMethod.POST,
        body: body,
      }),
    }),
  }),
});

export const { useLogInMutation, useSignUpMutation } = authApi;
