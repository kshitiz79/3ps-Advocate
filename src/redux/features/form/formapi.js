import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseUrl from './../../../utils/baseURL';

export const formApi = createApi({
  reducerPath: "formApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/forms`, // Dynamically use the baseUrl with /forms appended
  }),
  endpoints: (builder) => ({
    // POST: Submit a form
    submitForm: builder.mutation({
      query: (formData) => ({
        url: "/submit",
        method: "POST",
        body: formData,
      }),
    }),

    // GET: Retrieve all submitted forms
    getAllForms: builder.query({
      query: () => "/submissions",
    }),
  }),
});

export const { useSubmitFormMutation, useGetAllFormsQuery } = formApi;
