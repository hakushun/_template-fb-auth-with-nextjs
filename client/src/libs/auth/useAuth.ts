import firebase from 'firebase/app';
import { useRouter } from 'next/router';

export const useAuth = (): any => {
  const router = useRouter();

  const signup = async (value: { email: string; password: string }) => {
    const { email, password } = value;

    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      router.push('/auth');
    } catch (error) {
      switch (error.code) {
        case 'auth/invalid-email':
          console.log('メールアドレスを正しく入力してください。');
          break;
        case 'auth/weak-password':
          console.log('６文字以上のパスワードを設定してください。');
          break;
        case 'auth/email-already-in-use':
          console.log(
            `${email}は既に登録されています。\n SigninフォームよりSigninしてください。`,
          );
          break;
        default:
          console.log(`${error.code}\n${error.message}`);
          break;
      }
    }
  };

  const signin = async (value: { email: string; password: string }) => {
    const { email, password } = value;

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      router.push('/auth');
    } catch (error) {
      switch (error.code) {
        case 'auth/invalid-email':
          console.log('メールアドレスを正しく入力してください。');
          break;
        case 'auth/wrong-password':
          console.log(
            'パスワードが違います。\nパスワードを忘れた方は管理者に連絡してください。',
          );
          break;
        case 'auth/user-not-found':
          console.log(
            `${email}は登録されていません\n利用登録してない方はSign Upフォームより登録してください。`,
          );
          break;
        default:
          console.log(`${error.code}\n${error.message}`);
          break;
      }
    }
  };

  const logout = async () =>
    firebase
      .auth()
      .signOut()
      .then(() => {
        router.push('/');
      })
      .catch((e) => {
        console.error(e);
      });

  return { signup, signin, logout };
};
