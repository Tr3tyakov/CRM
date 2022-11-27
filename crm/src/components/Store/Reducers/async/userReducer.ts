import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IAuth, IRegistrt } from './userReducer.interfaces';

export const userApi = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: (builder) => ({
    setRegistration: builder.mutation<string, IRegistrt>({
      query: (body) => ({
        url: '/',
        method: 'POST',
        body,
      }),
    }),
    setAuthentication: builder.mutation<string, IAuth>({
      query: (body) => ({
        url: '',
        method: 'POST',
        body,
      }),
    }),
    getUser: builder.query<string, void>({
      query: () => `/`,
    }),
  }),
});

export const { useSetRegistrationMutation, useSetAuthenticationMutation, useGetUserQuery } =
  userApi;
