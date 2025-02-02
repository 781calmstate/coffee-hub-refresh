import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { postApi } from '../services';
import authReducer from './slices/auth/slice';

const apiReducers = [postApi];

const apiMiddleware = apiReducers.map(apiReducer => apiReducer.middleware);

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiMiddleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
