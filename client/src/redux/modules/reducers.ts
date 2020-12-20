import { combineReducers } from 'redux';
import user from './user';
import dialog from './dialog';
import menu from './menu';

const rootReducer = combineReducers({
  resources: combineReducers({ user }),
  ui: combineReducers({ dialog, menu }),
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
