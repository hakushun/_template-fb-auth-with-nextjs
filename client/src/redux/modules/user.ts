import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { createSelector } from 'reselect';
import { RootState } from './reducers';

export type User = {
  isAuth: boolean;
  id: string;
};
type AuthUser = {
  id: string;
} | null;

const actionCreator = actionCreatorFactory();
export const authUser = actionCreator<AuthUser>('AUTH_USER');
export const logoutUser = actionCreator('LOGOUT_USER');

const INITIAL_STATE: User = { isAuth: false, id: '' };

const reducer = reducerWithInitialState(INITIAL_STATE)
  .case(authUser, (state, payload) => {
    if (!payload) return { ...INITIAL_STATE };
    return {
      ...state,
      isAuth: true,
      id: payload.id,
    };
  })
  .case(logoutUser, () => ({ ...INITIAL_STATE }));

export default reducer;

export const selectIsAuth = createSelector(
  [(state: RootState) => state.resources.user.isAuth],
  (isAuth) => isAuth,
);
