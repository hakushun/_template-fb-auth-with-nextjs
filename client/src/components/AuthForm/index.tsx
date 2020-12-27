import React from 'react';
import initFirebase from '../../libs/auth/initFirebase';
import { useAuth } from '../../libs/auth/useAuth';
import { AuthForm as Presentational } from './AuthForm';

// Init the Firebase app.
initFirebase();

type Props = {
  type: 'signup' | 'signin';
  onSubmit: (_value: { email: string; password: string }) => Promise<void>;
};
export const AuthForm: React.VFC<Props> = ({ type, onSubmit }) => {
  const { signinWithGoogle } = useAuth();

  const handleSubmit = async (value: { email: string; password: string }) => {
    await onSubmit(value);
  };
  return (
    <Presentational
      type={type}
      onSubmit={handleSubmit}
      signinWithGoogle={signinWithGoogle}
    />
  );
};
