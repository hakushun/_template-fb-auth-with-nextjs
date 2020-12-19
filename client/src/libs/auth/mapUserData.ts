export const mapUserData = async (
  user: firebase.default.User,
): Promise<{ id: string; email: string | null; token: string }> => {
  const { uid, email } = user;
  const token = await user.getIdToken(true);
  return {
    id: uid,
    email,
    token,
  };
};
