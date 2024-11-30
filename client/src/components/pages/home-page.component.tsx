import React, { Fragment, useEffect, useState, type FC } from 'react';

import { useUpdateUserMutation, useUserQuery } from '@/app/user/user.api';
import { UserDetails } from '../organisms/user-details.component';
import { Button } from '../atoms/button.component';
import { useFormik } from 'formik';
import { updateUserInitialValues, updateUserValidationSchema, UpdateUserValues } from '@/app/user/update-user.schema';
import { UpdateUserDetailsForm } from '../organisms/update-user-details-form.component';

import { Dialog } from '@/components/atoms/dialog.component';
import { useDispatch } from 'react-redux';
import { logOut } from '@/app/auth/auth.slice';

export type HomePageProps = {};

export const HomePage: FC<HomePageProps> = () => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [logOutVisible, setLogOutVisible] = useState(false);
  const [balanceVisible, setBalanceVisible] = useState(false);
  const [updateUser, updateUserResult] = useUpdateUserMutation();
  const userQuery = useUserQuery(undefined);

  const { handleChange, handleSubmit, values, errors, setFieldValue, isValid } = useFormik({
    initialValues: {
      ...updateUserInitialValues,
      name: {
        first: userQuery.data?.name.first,
        last: userQuery.data?.name.last,
      },
      email: userQuery.data?.email,
      address: userQuery.data?.address,
      phone: userQuery.data?.phone,
      age: userQuery.data?.age,
      eyeColor: userQuery.data?.eyeColor,
      company: userQuery.data?.company,
    },
    validationSchema: updateUserValidationSchema,
    enableReinitialize: true,
    onSubmit: (values: UpdateUserValues) => {
      updateUser(values);
    },
  });

  useEffect(() => {
    if (updateUserResult.isSuccess) {
      setEdit(false);
    }
  }, [updateUserResult]);

  return (
    <Fragment>
      <div className="h-dvh flex flex-col sm:justify-center sm:items-center sm:p-4 md:p-16">
        <div className="sm:border-2 p-4 sm:p-8 md:p-16 rounded-lg gap-4 sm:gap-8 md:gap-16 w-full flex flex-col items-center sm:justify-center sm:flex-row sm:items-start">
          <div className="min-w-fit min-h-fit flex flex-col gap-4">
            {userQuery.isLoading ? (
              <div className="sm:h-64 sm:w-64 bg-gray-300 rounded-full animate-pulse flex-shrink-0"></div>
            ) : (
              <img src={userQuery.data?.picture} className="w-64 h-auto rounded-full flex-shrink-0 aspect-square" />
            )}
            <div className="flex flex-row gap-4">
              {!edit && (
                <Button className="flex-1" onClick={() => setBalanceVisible(true)}>
                  Balance
                </Button>
              )}
              {edit ? (
                <Button className="flex-1" onClick={() => setEdit(false)}>
                  Cancel
                </Button>
              ) : (
                <Button className="flex-1" onClick={() => setEdit(true)}>
                  Edit
                </Button>
              )}
            </div>
            <div className="flex flex-row gap-4">
              <Button className="flex-1" onClick={() => setLogOutVisible(true)}>
                Log out
              </Button>
            </div>
          </div>
          <div className="h-full flex-1 w-full">
            {edit ? (
              <UpdateUserDetailsForm
                isValid={isValid}
                onChange={handleChange}
                onSubmit={handleSubmit}
                values={values}
                errors={errors}
                isLoading={updateUserResult.isLoading}
              />
            ) : (
              <UserDetails user={userQuery.data} />
            )}
          </div>
        </div>
      </div>
      <Dialog
        title="Balance"
        visible={balanceVisible}
        onClose={() => setBalanceVisible(false)}
        footer={
          <Button size="md" onClick={() => setBalanceVisible(false)}>
            Close
          </Button>
        }
      >
        Your balance is {userQuery.data?.balance}
      </Dialog>
      <Dialog
        title="Logging out"
        visible={logOutVisible}
        onClose={() => setLogOutVisible(false)}
        footer={
          <div className="flex flex-row gap-4">
            <Button size="md" onClick={() => setLogOutVisible(false)}>
              Cancel
            </Button>
            <Button
              size="md"
              onClick={() => {
                dispatch(logOut());
                localStorage.removeItem('accessToken');
                setLogOutVisible(false);
              }}
            >
              Log out
            </Button>
          </div>
        }
      >
        Logging out will end your current session. Do you want to continue?
      </Dialog>
    </Fragment>
  );
};
