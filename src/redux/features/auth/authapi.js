import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import baseUrl from './../../../utils/baseURL';

// Get token from localStorage
const getToken = () => localStorage.getItem('token');


export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (data) => ({
        url: '/users/register',
        method: 'POST',
        body: data,
      }),
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: '/users/login',
        method: 'POST',
        body: data,
      }),
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'POST',
      }),
    }),
    getAllUsers: builder.query({
      query: () => '/users',
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useGetAllUsersQuery,
} = authApi;

