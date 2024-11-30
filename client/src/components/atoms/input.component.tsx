import { classNames } from '@/utils/class-names';
import React, { type FC } from 'react';

export type InputSize = 'sm' | 'md' | 'lg';

export type InputProps = Omit<JSX.IntrinsicElements['input'], 'size'> & {
  size?: InputSize;
};

export const Input: FC<InputProps> = ({ className, size, ...props }) => {
  const sizeClassNames: Record<InputSize, string> = {
    sm: 'h-8 px-2 text-sm border-2',
    md: 'h-10 px-2 text-lg border-2',
    lg: 'h-16 px-4 text-lg border-4',
  };

  return <input className={classNames('border rounded-md py-2', sizeClassNames[size ?? 'md'], className)} {...props} />;
};
