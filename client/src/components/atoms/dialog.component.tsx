import { Dialog as HeadlessDialog, DialogPanel, DialogTitle } from '@headlessui/react';

import React, { type FC, type ReactNode, Fragment, ReactElement } from 'react';
import { Button } from './button.component';

export type DialogProps = {
  visible?: boolean;
  onClose: (value: boolean) => void;
  title?: string;
  children?: string | ReactNode;
  button?: string;
  footer?: ReactElement;
};

export const Dialog: FC<DialogProps> = ({ visible, onClose, title, children, footer }) => {
  return (
    <Fragment>
      <HeadlessDialog open={visible} as="div" className="relative z-10 focus:outline-none" onClose={onClose}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/20">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-lg bg-white p-4 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle as="h3" className="text-base/7 font-medium">
                {title}
              </DialogTitle>
              <div>{children}</div>
              <div className="mt-4 flex justify-end">{footer}</div>
            </DialogPanel>
          </div>
        </div>
      </HeadlessDialog>
    </Fragment>
  );
};
