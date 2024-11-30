import { api } from '@/app/app.api';

import { RequestMethod } from '@/utils/request-method';

export const userApi = api.enhanceEndpoints({ addTagTypes: ['user'] }).injectEndpoints({
  overrideExisting: false,
  endpoints: (builder) => ({
    user: builder.query({
      query: () => ({
        url: 'user',
        method: RequestMethod.GET,
      }),
      providesTags: ['user'],
    }),
    updateUser: builder.mutation({
      query: ({ ...body }) => ({
        url: `user`,
        body: body,
        method: RequestMethod.PUT,
      }),
      invalidatesTags: ['user'],
    }),
  }),
});

export const { useUserQuery, useUpdateUserMutation } = userApi;
