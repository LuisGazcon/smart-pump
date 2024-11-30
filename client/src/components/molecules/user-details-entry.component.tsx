import React, { Fragment, type FC } from 'react';

export type UserDetailEntryProps = {
  name: string;
  value: string;
  isLoading?: boolean;
};

export const UserDetailEntry: FC<UserDetailEntryProps> = ({ name, value, isLoading }) => {
  return (
    <div className="flex flex-col gap-1">
      {isLoading ? (
        <Fragment>
          <div className="h-6 bg-gray-300 animate-pulse w-3/4"></div>
          <div className="h-6 bg-gray-300 animate-pulse w-1/2"></div>
        </Fragment>
      ) : (
        <Fragment>
          <p className="min-h-6 font-bold h-6 text-ellipsis">{name}</p>
          <p className="min-h-6 text-gray-800">{value}</p>
        </Fragment>
      )}
    </div>
  );
};
