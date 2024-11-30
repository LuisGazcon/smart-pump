import { createSelector, createSlice } from '@reduxjs/toolkit';

import { authApi } from '@/app/auth/auth.api';

export interface AuthState {
  accessToken?: string;
  user: any;
}

const initialState: AuthState = {
  accessToken: undefined,
  user: undefined,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: (state) => {
      state.accessToken = undefined;
      state.user = undefined;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload.accessToken;
    },
    setUserId: (state, action) => {
      state.user = { id: action.payload.id };
    },
    setUser: (state, action) => {
      state.user = action.payload.user;
    },
  },
  extraReducers(builder) {
    builder.addMatcher(authApi.endpoints.logIn.matchFulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
    });
  },
});

export const { logOut, setAccessToken, setUserId, setUser } = authSlice.actions;

export const selectAuth = (state: any) => state.auth;

export const selectAccessToken = createSelector(selectAuth, (auth) => auth.accessToken);

export const selectUser = createSelector(selectAuth, (auth) => auth.user);
