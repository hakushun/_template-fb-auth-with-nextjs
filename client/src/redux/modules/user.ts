import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { createSelector } from 'reselect';
import { RootState } from './reducers';

export type User = {
  id: string;
  email: string | null;
  token: string;
};

const actionCreator = actionCreatorFactory();
export const authUser = actionCreator<User | null>('AUTH_USER');

const INITIAL_STATE: User | null = null;

const reducer = reducerWithInitialState(INITIAL_STATE).case(
  authUser,
  (_state, payload) => {
    if (!payload) return null;
    return { ...payload };
  },
);

export default reducer;

export const selectUser = createSelector(
  [(state: RootState) => state.resources.user],
  (user) => user,
);
