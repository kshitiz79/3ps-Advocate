import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import baseUrl from './../../../utils/baseURL';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}/products` }),
  endpoints: (builder) => ({
   
    getProducts: builder.query({
      query: () => '/',
    }),
    getProductById: builder.query({
      query: (id) => `/${id}`,
    }),
    addProduct: builder.mutation({
      query: (product) => ({
        url: '/',
        method: 'POST',
        body: product,
      }),
    }),

    updateProduct: builder.mutation({
      query: ({ id, productData }) => ({
        url: `/${id}`,
        method: "PUT",
        body: productData,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/${id}`, // Ensure this is the correct endpoint
        method: "DELETE",
      }),
    }),
    


  }),
});

export const {
  useGetProductByIdQuery,
  useUpdateProductMutation,
  useGetProductsQuery,
  useAddProductMutation,
  useDeleteProductMutation
} = productApi;
