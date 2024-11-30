import { classNames } from '@/utils/class-names';
import React, { type FC } from 'react';

export type ButtonSize = 'sm' | 'md' | 'lg';

export type ButtonProps = Omit<JSX.IntrinsicElements['button'], 'size'> & {
  isLoading?: boolean;
  size?: ButtonSize;
};

export const Button: FC<ButtonProps> = ({ className, children, isLoading, size, ...props }) => {
  const sizeClassNames: Record<ButtonSize, string> = {
    sm: 'h-8 px-2 text-sm',
    md: 'h-10 px-2',
    lg: 'h-16 px-4 text-lg',
  };

  const spinnerSizeClassNames: Record<ButtonSize, string> = {
    sm: 'h-4 w-4 border-2',
    md: 'h-4 w-4 border-2',
    lg: 'h-4 w-4 border-4',
  };

  return (
    <button
      className={classNames(
        'bg-gray-400 hover:bg-gray-300 rounded-md px-4 py-2 font-bold disabled:cursor-not-allowed flex gap-2 items-center justify-center',
        sizeClassNames[size ?? 'md'],
        className,
      )}
      {...props}
    >
      {children}
      {isLoading && (
        <div
          className={classNames(
            spinnerSizeClassNames[size ?? 'md'],
            'inline-block animate-spin rounded-full border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white',
          )}
          role="status"
        ></div>
      )}
    </button>
  );
};
