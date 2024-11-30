import * as Yup from 'yup';

export type UpdateUserValues = {
  name: {
    first: string;
    last: string;
  };
  email: string;
  address: string;
  phone: string;
  company: string;
  eyeColor: string;
  age: number;
};

export const updateUserInitialValues: UpdateUserValues = {
  name: { first: '', last: '' },
  email: '',
  address: '',
  phone: '',
  company: '',
  eyeColor: '',
  age: 0,
};

export const updateUserValidationSchema = Yup.object({
  email: Yup.string().email('E-mail must be valid').required('E-mail is a required field'),
  address: Yup.string().required('Address is a required field'),
  phone: Yup.string().required('Phone is a required field'),
  company: Yup.string().required('Company is a required field'),
  eyeColor: Yup.string().required('Eye color is a required field'),
  age: Yup.number().required('Age is a required field').min(1, 'The age must be between 1 and 110').max(110),
});
