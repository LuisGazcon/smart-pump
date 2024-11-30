import React, { type FC } from 'react';
import { UserDetailEntry } from '../molecules/user-details-entry.component';

export type UserDetailsProps = {
  user: any;
  isLoading?: boolean;
};

export const UserDetails: FC<UserDetailsProps> = ({ user, isLoading }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <UserDetailEntry isLoading={isLoading} name="First name" value={user?.name?.first} />
      <UserDetailEntry isLoading={isLoading} name="Last name" value={user?.name?.last} />
      <UserDetailEntry isLoading={isLoading} name="E-mail" value={user?.email} />
      <UserDetailEntry isLoading={isLoading} name="Address" value={user?.address} />
      <UserDetailEntry isLoading={isLoading} name="Phone" value={user?.phone} />
      <UserDetailEntry isLoading={isLoading} name="company" value={user?.company} />
      <UserDetailEntry isLoading={isLoading} name="Eye color" value={user?.eyeColor} />
      <UserDetailEntry isLoading={isLoading} name="age" value={user?.age} />
    </div>
  );
};
