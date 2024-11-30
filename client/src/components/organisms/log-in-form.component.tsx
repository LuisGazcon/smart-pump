import React, { ChangeEventHandler, FormEventHandler, type FC } from 'react';

import { LogInValues } from '@/app/auth/login.schema';
import { Input } from '@/components/atoms/input.component';
import { Button } from '@/components/atoms/button.component';
import { Label } from '@/components/atoms/label.component';
import { FormikProps } from 'formik';

export type LogInFormProps = {
  onChange: ChangeEventHandler<HTMLInputElement>;
  onSubmit: FormEventHandler<HTMLFormElement>;
  values: LogInValues;
  errors: FormikProps<LogInValues>['errors'];
  isValid?: boolean;
};

export const LogInForm: FC<LogInFormProps> = ({ onChange, onSubmit, values, errors, isValid }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-8 items-center w-full sm:w-96 p-4 sm:border-2 sm:rounded-lg "
    >
      <img src="/public/logo.png" className="w-64 h-64" />
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-2">
          <Label htmlFor="login-email-input">Username</Label>
          <Input id="login-email-input" name="email" type="text" value={values.email} onChange={onChange} />
          {errors.email && <small className="text-red-500">{errors.email}</small>}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="login-password-input">Password</Label>
          <Input
            id="login-password-input"
            name="password"
            type="password"
            value={values.password}
            onChange={onChange}
          />
          {errors.password && <small className="text-red-500">{errors.password}</small>}
        </div>
        <Button type="submit" className="uppercase" disabled={!isValid}>
          Login
        </Button>
      </div>
    </form>
  );
};
