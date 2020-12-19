import React from 'react';
import { useAuth } from '../../libs/auth/useAuth';
import { SignIn as Presentational } from './SignIn';

export const SignIn: React.VFC = () => {
  const { signin } = useAuth();
  return <Presentational signin={signin} />;
};
