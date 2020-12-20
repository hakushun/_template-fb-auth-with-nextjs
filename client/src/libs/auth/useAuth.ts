import firebase from 'firebase/app';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { logoutUser } from '../../redux/modules/user';
import { removeUserCookie } from './userCookies';
import { emitError } from '../../redux/modules/dialog';

const alertError = (error: any) => {
  switch (error.code) {
    case 'auth/invalid-email':
      return {
        title: 'auth/invalid-email',
        description: 'メールアドレスを正しく入力してください。',
      };
    case 'auth/weak-password':
      return {
        title: 'auth/weak-password',
        description: '６文字以上のパスワードを設定してください。',
      };
    case 'auth/email-already-in-use':
      return {
        title: 'auth/email-already-in-use',
        description:
          'このメールアドレスは既に登録されています。\n SigninフォームよりSigninしてください。',
      };
    case 'auth/wrong-password':
      return {
        title: 'auth/wrong-password',
        description: 'パスワードが違います。',
      };
    case 'auth/user-not-found':
      return {
        title: 'auth/user-not-found',
        description:
          'このメールアドレスは登録されていません\nSign Upフォームより登録してください。',
      };
    default:
      return { title: `${error.code}`, description: `${error.message}` };
  }
};

// TODO: 型修正
export const useAuth = (): any => {
  const router = useRouter();
  const dispatch = useDispatch();

  const signup = async (value: {
    email: string;
    password: string;
  }): Promise<void> => {
    const { email, password } = value;

    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
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

  return { signup, signin, logout };
};
