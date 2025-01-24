import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Base URL for the API
const baseUrl = "http://localhost:4000/api";

export const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // Fetch all orders (GET: /orders/all)
    getAllOrders: builder.query({
      query: () => "/orders/all",
    }),

    // Submit a new order (POST: /orders/submit)
    submitOrder: builder.mutation({
      query: (newOrder) => ({
        url: "/orders/submit",
        method: "POST",
        body: newOrder,
      }),
    }),
  }),
});

// Export hooks for the endpoints
export const { useGetAllOrdersQuery, useSubmitOrderMutation } = ordersApi;
