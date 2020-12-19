import firebase from 'firebase/app';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { authUser } from '../../redux/modules/user';

const alertError = (error: any) => {
  switch (error.code) {
    case 'auth/invalid-email':
      return 'メールアドレスを正しく入力してください。';
    case 'auth/weak-password':
      return '６文字以上のパスワードを設定してください。';
    case 'auth/email-already-in-use':
      return 'このメールアドレスは既に登録されています。\n SigninフォームよりSigninしてください。';
    case 'auth/wrong-password':
      return 'パスワードが違います。';
    case 'auth/user-not-found':
      return 'このメールアドレスは登録されていません\nSign Upフォームより登録してください。';
    default:
      return `${error.code}\n${error.message}`;
  }
};

export const useAuth = (): any => {
  const router = useRouter();
  const dispatch = useDispatch();

  const signup = async (value: { email: string; password: string }) => {
    const { email, password } = value;

    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      router.push('/mypage');
    } catch (error) {
      console.log(alertError(error));
    }
  };

  const signin = async (value: { email: string; password: string }) => {
    const { email, password } = value;

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      router.push('/mypage');
    } catch (error) {
      console.log(alertError(error));
    }
  };

  const logout = async () =>
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch(authUser(null));
        router.push('/');
      })
      .catch((e) => {
        console.error(e);
      });

  return { signup, signin, logout };
};
