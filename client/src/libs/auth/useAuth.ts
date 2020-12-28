import firebase from 'firebase/app';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { logoutUser } from '../../redux/modules/user';
import { removeUserCookie } from './userCookies';
import { emitError } from '../../redux/modules/dialog';
import initFirebase from '../../libs/auth/initFirebase';
import { alertError } from './alertError';
import { create } from '../../redux/modules/users';

// TODO: 型修正
export const useAuth = (): any => {
  // Init the Firebase app.
  initFirebase();

  const router = useRouter();
  const dispatch = useDispatch();
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  const signinWithGoogle = async () => {
    try {
      const { user } = await firebase.auth().signInWithPopup(googleProvider);
      dispatch(create({ id: user!.uid, username: user!.displayName || '' }));
      router.push('/mypage');
    } catch (error) {
      dispatch(emitError(alertError(error)));
    }
  };

  const signup = async (value: {
    email: string;
    password: string;
  }): Promise<void> => {
    const { email, password } = value;

    try {
      const { user } = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      dispatch(create({ id: user!.uid, username: user!.displayName || '' }));
      router.push('/mypage');
    } catch (error) {
      dispatch(emitError(alertError(error)));
    }
  };

  const signin = async (value: {
    email: string;
    password: string;
  }): Promise<void> => {
    const { email, password } = value;

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      router.push('/mypage');
    } catch (error) {
      dispatch(emitError(alertError(error)));
    }
  };

  const logout = async (): Promise<void> =>
    firebase
      .auth()
      .signOut()
      .then(() => {
        removeUserCookie();
        dispatch(logoutUser());
        router.push('/');
      })
      .catch((error) => {
        dispatch(emitError(alertError(error)));
      });

  return { signinWithGoogle, signup, signin, logout };
};
