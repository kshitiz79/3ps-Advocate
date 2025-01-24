import { configureStore } from '@reduxjs/toolkit';
import authSlice from './features/auth/authslice';
import { authApi } from './features/auth/authapi';
import { productApi } from './features/product/productApi';
import { formApi } from './features/form/formapi';
import { reviewApi } from './features/review/reviewApi';
import cartReducer from "./features/cart/cartSlice";

import {  ordersApi } from './features/order/orderApi';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [formApi.reducerPath]: formApi.reducer,
    [reviewApi.reducerPath]: reviewApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
    auth: authSlice,
    cart: cartReducer, // Your auth slice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      productApi.middleware,
      formApi.middleware,
      reviewApi.middleware,
      ordersApi.middleware,
 // Add reviewApi middleware
    ),
});

export default store;
