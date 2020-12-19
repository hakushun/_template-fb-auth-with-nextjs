import { User } from '../../redux/modules/user';

export const mapUserData = async (
  user: firebase.default.User,
): Promise<User> => {
  const { uid, email } = user;
  const token = await user.getIdToken(true);
  return {
    id: uid,
    email,
    token,
  };
};
