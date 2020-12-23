import { combineReducers } from 'redux';
import user from './user';
import dialog from './dialog';
import dropdown from './dropdown';
import modal from './modal';

const rootReducer = combineReducers({
  resources: combineReducers({ user }),
  ui: combineReducers({ dialog, dropdown, modal }),
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
