import firebase from 'firebase/app';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { emitError } from '../../redux/modules/dialog';
import initFirebase from './initFirebase';
import { alertError } from './alertError';
import { remove, update } from '../../redux/modules/users';

// TODO: 型修正
export const useUser = (): any => {
  // Init the Firebase app.
  initFirebase();

  const router = useRouter();
  const dispatch = useDispatch();

  const user = firebase.auth().currentUser;

  if (!user) return null;

  const updateUsername = async (username: string) => {
    try {
      await user.updateProfile({ displayName: username });
      dispatch(update({ id: user.uid, username }));
    } catch (error) {
      dispatch(emitError(alertError(error)));
    }
  };

  const deleteUser = async () => {
    try {
      await user.delete();
      dispatch(remove({ id: user.uid }));
      router.push('/');
    } catch (error) {
      dispatch(emitError(alertError(error)));
    }
  };
  return { updateUsername, deleteUser };
};
