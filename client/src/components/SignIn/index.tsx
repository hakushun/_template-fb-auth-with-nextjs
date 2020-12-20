import React from 'react';
import { useSelector } from 'react-redux';
import { useAuth } from '../../libs/auth/useAuth';
import { selectDialog, selectDialogMessage } from '../../redux/modules/dialog';
import { SignIn as Presentational } from './SignIn';

export const SignIn: React.VFC = () => {
  const dialogIsOpened = useSelector(selectDialog);
  const dialogMessage = useSelector(selectDialogMessage);
  const { signin } = useAuth();
  return (
    <Presentational
      isOpend={dialogIsOpened}
      message={dialogMessage}
      signin={signin}
    />
  );
};
