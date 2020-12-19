import React from 'react';
import initFirebase from '../../libs/auth/initFirebase';
import { AuthForm as Presentational } from './AuthForm';

// Init the Firebase app.
initFirebase();

type Props = {
  type: 'signup' | 'signin';
  onSubmit: (_value: { email: string; password: string }) => Promise<void>;
};
export const AuthForm: React.VFC<Props> = ({ type, onSubmit }) => {
  const handleSubmit = async (value: { email: string; password: string }) => {
    await onSubmit(value);
  };
  return <Presentational type={type} onSubmit={handleSubmit} />;
};
