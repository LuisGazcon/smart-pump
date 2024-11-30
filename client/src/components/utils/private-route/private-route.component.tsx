import type { FC, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectAccessToken } from '@/app/auth/auth.slice';

export type PrivateRouteProps = {
  children?: ReactNode;
};

export const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const accessToken = useSelector(selectAccessToken);

  return accessToken ? children : <Navigate to="/auth/login" />;
};
