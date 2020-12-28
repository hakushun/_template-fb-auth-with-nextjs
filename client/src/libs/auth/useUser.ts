import firebase from 'firebase/app';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { emitError } from '../../redux/modules/dialog';
import initFirebase from './initFirebase';
import { alertError } from './alertError';
import { remove, update } from '../../redux/modules/users';
import { removeUserCookie } from './userCookies';

// TODO: 型修正
export const useUser = (): any => {
  // Init the Firebase app.
  initFirebase();

  const router = useRouter();
  const dispatch = useDispatch();

  const updateUsername = async (username: string) => {
    const user = firebase.auth().currentUser;

    if (!user) return;
    try {
      await user.updateProfile({ displayName: username });
      dispatch(update({ id: user.uid, username }));
    } catch (error) {
      dispatch(emitError(alertError(error)));
    }
  };

  const resetPassword = async (email: string) => {
    await firebase.auth().sendPasswordResetEmail(email);
  };

  const deleteUser = async (value: { email: string; password: string }) => {
    const user = firebase.auth().currentUser;

    if (!user) return;
    const { email, password } = value;
    try {
      const credential = firebase.auth.EmailAuthProvider.credential(
        email,
        password,
      );
      if (!credential) return;
      await user.reauthenticateWithCredential(credential);
      await user.delete();
      router.push('/');
      dispatch(remove({ id: user.uid }));
      removeUserCookie();
    } catch (error) {
      dispatch(emitError(alertError(error)));
    }
  };

  return { updateUsername, resetPassword, deleteUser };
};
