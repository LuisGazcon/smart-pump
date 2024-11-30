import * as Yup from 'yup';

export type LogInValues = {
  email: string;
  password: string;
};

export const logInInitialValues = {
  email: '',
  password: '',
};

export const logInValidationSchema = Yup.object({
  email: Yup.string().required('Username is a required field'),
  password: Yup.string().required('Password is a required field'),
});
