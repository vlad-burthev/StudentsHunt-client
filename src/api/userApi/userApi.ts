import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_API_URL }),
  endpoints: (builder) => ({
    redgistration: builder.mutation({
      query: ({ authData, endpoint }) => ({
        url: `${endpoint}/create`,
        method: "POST",
        body: authData,
      }),
    }),
    login: builder.mutation({
      query: ({ authData, endpoint }) => ({
        url: `auth/login/${endpoint}`,
        method: "POST",
        body: authData,
      }),
    }),
  }),
});

export const { useRedgistrationMutation, useLoginMutation } = userApi;
