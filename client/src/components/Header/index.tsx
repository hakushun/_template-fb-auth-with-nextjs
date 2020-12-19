import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/modules/user';
import { Header as Presentational } from './Header';
import { useAuth } from '../../libs/auth/useAuth';

export const Header: React.VFC = () => {
  const user = useSelector(selectUser);
  const { logout } = useAuth();

  return <Presentational user={user} logout={logout} />;
};
