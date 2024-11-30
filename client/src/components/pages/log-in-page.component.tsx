import React, { Fragment, useState, type FC } from 'react';

import { useFormik } from 'formik';
import { useLogInMutation } from '@/app/auth/auth.api';
import { LogInForm } from '@/components/organisms/log-in-form.component';
import { logInInitialValues, logInValidationSchema } from '@/app/auth/login.schema';
import { Button } from '../atoms/button.component';
import { Dialog } from '../atoms/dialog.component';

export type LogInPageProps = {};

export const LogInPage: FC<LogInPageProps> = () => {
  const [errorVisible, setErrorVisible] = useState(false);

  const [logIn] = useLogInMutation();
  const { values, handleChange, handleSubmit, errors, isValid } = useFormik({
    validationSchema: logInValidationSchema,
    initialValues: logInInitialValues,
    onSubmit: async (values) => {
      logIn(values)
        .unwrap()
        .then((data) => localStorage.setItem('accessToken', data.accessToken))
        .catch((error) => setErrorVisible(true));
    },
  });

  return (
    <Fragment>
      <div className="flex flex-col justify-center items-center h-dvh">
        <LogInForm onChange={handleChange} onSubmit={handleSubmit} values={values} errors={errors} isValid={isValid} />
      </div>
      <Dialog
        title="Can't log in"
        visible={errorVisible}
        onClose={() => setErrorVisible(false)}
        footer={
          <Button size="md" onClick={() => setErrorVisible(false)}>
            Close
          </Button>
        }
      >
        We couldn’t log you in. Please double-check your username and password and try again.
      </Dialog>
    </Fragment>
  );
};
