import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import firebase from 'firebase/app';
import 'firebase/auth';
import initFirebase from '../libs/auth/initFirebase';
import { removeUserCookie, setUserCookie } from '../libs/auth/userCookies';
import { mapUserData } from '../libs/auth/mapUserData';
import { authUser, selectUser } from '../redux/modules/user';
import { PageLoader } from '../components/PageLoader';

initFirebase();

export const withAuth = (Component: React.FC): React.FC => (
  props: any,
): JSX.Element => {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector(selectUser);

  useEffect(() => {
    const cancelAuthListener = firebase.auth().onIdTokenChanged(async (usr) => {
      if (usr) {
        const userData = await mapUserData(usr);
        setUserCookie(userData);
        dispatch(authUser(userData));
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

  return <>{!user ? <PageLoader /> : <Component {...props} />}</>;
};
