import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { createSelector } from 'reselect';
import { RootState } from './reducers';

export type User = {
  isAuth: boolean;
};

const actionCreator = actionCreatorFactory();
export const authUser = actionCreator<boolean>('AUTH_USER');
export const logoutUser = actionCreator('LOGOUT_USER');

const INITIAL_STATE: User = { isAuth: false };

const reducer = reducerWithInitialState(INITIAL_STATE)
  .case(authUser, (state, payload) => ({
    ...state,
    isAuth: payload,
  }))
  .case(logoutUser, (state) => ({
    ...state,
    isAuth: false,
  }));

export default reducer;

export const selectIsAuth = createSelector(
  [(state: RootState) => state.resources.user.isAuth],
  (isAuth) => isAuth,
);
