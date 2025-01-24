import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import baseUrl from './../../../utils/baseURL';

export const reviewApi = createApi({
  reducerPath: 'reviewApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
  // Debug log
      } else {
        console.error('No authToken found in localStorage');
      }
      return headers;
    },
  }),
  
  endpoints: (builder) => ({
    getReviews: builder.query({
      query: () => '/reviews',
    }),
    addReview: builder.mutation({
      query: (newReview) => ({
        url: '/reviews/add',
        method: 'POST',
        body: newReview,
      }),
    }),
    editReview: builder.mutation({
      query: ({ id, updatedReview }) => ({
        url: `/reviews/edit/${id}`,
        method: 'PUT',
        body: updatedReview,
      }),
    }),
    deleteReview: builder.mutation({
      query: (id) => ({
        url: `/reviews/delete/${id}`,
        method: 'DELETE',
      }),
    }),
    
  }),
});

// Export hooks for all endpoints
export const { 
  useGetReviewsQuery, 
  useAddReviewMutation, 
  useEditReviewMutation, 
  useDeleteReviewMutation 
} = reviewApi;

// Export the base URL for potential use elsewhere
