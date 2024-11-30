import React, { useEffect, type FC } from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from './app.router';
import { useDispatch } from 'react-redux';
import { setAccessToken } from './auth/auth.slice';

export type AppProps = any;

export const App: FC<AppProps> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    dispatch(setAccessToken({ accessToken }));
  }, []);

  return <RouterProvider router={router} />;
};
