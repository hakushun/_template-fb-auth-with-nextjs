import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsAuth } from '../../redux/modules/user';
import { Header as Presentational } from './Header';
import { useAuth } from '../../libs/auth/useAuth';
import {
  selectBargerMenu,
  toggleBargerMenu,
} from '../../redux/modules/dropdown';

export const Header: React.VFC = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const isOpened = useSelector(selectBargerMenu);
  const { logout } = useAuth();

  const toggleMenu = () => {
    dispatch(toggleBargerMenu());
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
