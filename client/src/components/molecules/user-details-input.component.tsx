import React, { type FC } from 'react';
import { Input, InputProps } from '../atoms/input.component';
import { classNames } from '@/utils/class-names';

export type UserDetailsInputProps = InputProps & {
  label: string;
  error?: string;
};

export const UserDetailsInput: FC<UserDetailsInputProps> = ({ label, error, ...props }) => {
  return (
    <div className="flex flex-col gap-1">
      <label>{label}</label>
      <Input size="md" {...props} className={classNames(error && 'border-red-500')} />
      {error && <small className="text-red-500">{error}</small>}
    </div>
  );
};
