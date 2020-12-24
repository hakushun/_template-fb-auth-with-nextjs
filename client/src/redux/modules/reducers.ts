import { combineReducers } from 'redux';
import user from './user';
import dialog from './dialog';
import dropdown from './dropdown';
import modal from './modal';
import project from './project';
import projects from './projects';
import task from './task';
import tasks from './tasks';
import activity from './activity';
import activities from './activities';

const rootReducer = combineReducers({
  resources: combineReducers({ user, projects, tasks, activities }),
  ui: combineReducers({ dialog, dropdown, modal, project, task, activity }),
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
