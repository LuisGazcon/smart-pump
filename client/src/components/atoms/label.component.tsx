import React, { type FC } from 'react';

import { classNames } from '@/utils/class-names';

export type LabelProps = JSX.IntrinsicElements['label'] & {};

export const Label: FC<LabelProps> = ({ className, ...props }) => {
  return <label className={classNames('', className)} {...props} />;
};
