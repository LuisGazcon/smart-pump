import { createBrowserRouter, Navigate } from 'react-router-dom';

import { HomePage } from '@/components/pages/home-page.component';
import { LogInPage } from '@/components/pages/log-in-page.component';
import { PublicRoute } from '@/components/utils/public-route/public-route.component';
import { PrivateRoute } from '@/components/utils/private-route/private-route.component';

export const router = createBrowserRouter([
  {
    path: '/auth/login',
    element: (
      <PublicRoute onlyPublic>
        <LogInPage />
      </PublicRoute>
    ),
  },
  {
    path: '/',
    element: (
      <PrivateRoute>
        <HomePage />
      </PrivateRoute>
    ),
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
]);
