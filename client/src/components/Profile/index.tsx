import React from 'react';
import { useSelector } from 'react-redux';
import { withAuth } from '../../helpers/withAuth';
import { useUser } from '../../libs/auth/useUser';
import { selectUser, User } from '../../redux/modules/user';
import { Profile as Presentational } from './Profile';

const Component: React.VFC = () => {
  const user = useSelector(selectUser);
  const { updateUsername } = useUser();

  const handleUpdate = (value: User) => {
    updateUsername(value.username);
  };
  return <Presentational initialValues={user} handleUpdate={handleUpdate} />;
};

export const Profile = withAuth(Component);
