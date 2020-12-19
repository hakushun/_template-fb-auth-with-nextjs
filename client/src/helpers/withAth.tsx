import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import firebase from 'firebase/app';
import 'firebase/auth';
import initFirebase from '../libs/auth/initFirebase';
import { removeUserCookie, setUserCookie } from '../libs/auth/userCookies';
import { mapUserData } from '../libs/auth/mapUserData';
import { authUser } from '../redux/modules/user';

initFirebase();

// TODO: Loading の追加
export const withAuth = (Component: React.FC): React.FC => (
  props: any,
): JSX.Element => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const cancelAuthListener = firebase
      .auth()
      .onIdTokenChanged(async (user) => {
        if (user) {
          const userData = await mapUserData(user);
          setUserCookie(userData);
          dispatch(authUser(userData));
          router.push('/mypage');
        } else {
          removeUserCookie();
          dispatch(authUser(null));
          router.push('/');
        }
      });
    return () => {
      cancelAuthListener();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Component {...props} />;
};
