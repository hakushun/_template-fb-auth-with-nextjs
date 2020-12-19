import { combineReducers } from 'redux';
import user from './user';

const rootReducer = combineReducers({
  resources: combineReducers({ user }),
  // ui: combineReducers({}),
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
