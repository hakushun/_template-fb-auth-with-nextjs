import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { createSelector } from 'reselect';
import { RootState } from './reducers';
import { logoutUser } from './user';

const actionCreator = actionCreatorFactory();

export const toggle = actionCreator('TOGGLE_MENU');

const INITIAL_STATE = false;

const reducer = reducerWithInitialState(INITIAL_STATE)
  .case(toggle, (state) => !state)
  .case(logoutUser, (state) => !state);

export default reducer;

export const selectMenu = createSelector(
  [(state: RootState) => state.ui.menu],
  (menu) => menu,
);
