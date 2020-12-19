import React from 'react';
import { useAuth } from '../../libs/auth/useAuth';
import { SignUp as Presentational } from './SignUp';

export const SignUp: React.VFC = () => {
  const { signup } = useAuth();
  return <Presentational signup={signup} />;
};
