import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { api } from "@/app/app.api";
import { authSlice } from "@/app/auth/auth.slice";

export const store = configureStore({
  devTools: true,
  reducer: combineReducers({
    [authSlice.name]: authSlice.reducer,
    [api.reducerPath]: api.reducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => store.dispatch;
