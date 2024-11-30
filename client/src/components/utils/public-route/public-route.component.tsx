import type { FC, ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { selectAccessToken } from "@/app/auth/auth.slice";

export type PublicRouteProps = {
  children?: ReactNode;
  onlyPublic?: boolean;
};

export const PublicRoute: FC<PublicRouteProps> = ({ children, onlyPublic }) => {
  const accessToken = useSelector(selectAccessToken);

  return onlyPublic && accessToken ? <Navigate to="/" /> : children;
};
