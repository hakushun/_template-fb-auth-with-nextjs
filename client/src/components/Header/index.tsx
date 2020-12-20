import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsAuth } from '../../redux/modules/user';
import { Header as Presentational } from './Header';
import { useAuth } from '../../libs/auth/useAuth';
import { selectMenu, toggle } from '../../redux/modules/menu';

export const Header: React.VFC = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const isOpened = useSelector(selectMenu);
  const { logout } = useAuth();

  const toggleMenu = () => {
    dispatch(toggle());
  };
  return (
    <Presentational
      isAuth={isAuth}
      isOpened={isOpened}
      toggleMenu={toggleMenu}
      logout={logout}
    />
  );
};
