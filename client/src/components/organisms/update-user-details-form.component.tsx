import { UpdateUserValues } from '@/app/user/update-user.schema';
import React, { ChangeEventHandler, FormEventHandler, type FC } from 'react';
import { UserDetailsInput } from '../molecules/user-details-input.component';
import { Button } from '../atoms/button.component';
import { FormikProps } from 'formik';

export type UpdateUserDetailsFormProps = {
  values: UpdateUserValues;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onSubmit: FormEventHandler<HTMLFormElement>;
  disabled?: boolean;
  errors: FormikProps<UpdateUserValues>['errors'];
  isLoading?: boolean;
  isValid?: boolean;
};

export const UpdateUserDetailsForm: FC<UpdateUserDetailsFormProps> = ({
  values,
  onChange,
  onSubmit,
  errors,
  isLoading,
  isValid,
}) => {
  return (
    <form className="flex flex-col gap-2 w-full" onSubmit={onSubmit}>
      <UserDetailsInput
        label="First name"
        name="name.first"
        value={values.name?.first}
        error={errors.name?.first}
        onChange={onChange}
        disabled={isLoading}
      />
      <UserDetailsInput
        label="Last name"
        name="name.last"
        value={values.name?.last}
        error={errors.name?.last}
        onChange={onChange}
        disabled={isLoading}
      />
      <UserDetailsInput
        label="E-mail"
        name="email"
        value={values.email}
        error={errors.email}
        onChange={onChange}
        disabled={isLoading}
      />
      <UserDetailsInput
        label="Address"
        name="address"
        value={values.address}
        error={errors.address}
        onChange={onChange}
        disabled={isLoading}
      />
      <UserDetailsInput
        label="Phone"
        name="phone"
        value={values.phone}
        error={errors.phone}
        onChange={onChange}
        disabled={isLoading}
      />
      <UserDetailsInput
        label="Company"
        name="company"
        value={values.company}
        error={errors.company}
        onChange={onChange}
        disabled={isLoading}
      />
      <UserDetailsInput
        label="Eye color"
        name="eyeColor"
        value={values.eyeColor}
        error={errors.eyeColor}
        onChange={onChange}
        disabled={isLoading}
      />
      <UserDetailsInput
        label="Age"
        name="age"
        value={values.age}
        error={errors.age}
        onChange={onChange}
        disabled={isLoading}
      />
      <Button type="submit" disabled={!isValid}>
        Save
      </Button>
    </form>
  );
};
