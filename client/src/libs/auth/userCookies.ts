import cookies from 'js-cookie';
import { User } from '../../redux/modules/user';

// 現状使ってない
export const getUserFromCookie = (): any => {
  const cookie = cookies.get('auth');
  if (!cookie) {
    return;
  }
  // eslint-disable-next-line consistent-return
  return JSON.parse(cookie);
};

export const setUserCookie = (user: User): void => {
  cookies.set('auth', user, {
    // firebase id tokens expire in one hour
    // set cookie expiry to match
    expires: 1 / 24,
  });
};

export const removeUserCookie = (): void => cookies.remove('auth');
