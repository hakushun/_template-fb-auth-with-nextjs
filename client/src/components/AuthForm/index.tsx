import React from 'react';
import { AuthForm as Presentational } from './AuthForm';

type Props = {
  type: 'signup' | 'signin';
};
export const AuthForm: React.VFC<Props> = ({ type }) => {
  const handleSubmit = (value: { email: string; password: string }) =>
    new Promise(() => {
      setTimeout(() => console.log(value), 3000);
    });
  return <Presentational type={type} onSubmit={handleSubmit} />;
};
