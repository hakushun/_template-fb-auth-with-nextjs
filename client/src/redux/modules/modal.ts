import { createSelector } from 'reselect';
import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { add as addActivity, edit as editActivity } from './activity';
import { add as addProject, edit as editProject } from './project';
import { RootState } from './reducers';
import { add as addTask, edit as editTask } from './task';

const actionCreator = actionCreatorFactory();

export const toggleProjectForm = actionCreator<boolean>('TOGGLE_PROJECT_FORM');
export const toggleTaskForm = actionCreator<boolean>('TOGGLE_TASK_FORM');
export const toggleActivityForm = actionCreator<boolean>(
  'TOGGLE_ACTIVITY_FORM',
);

const INITIAL_STATE: {
  projectForm: boolean;
  taskForm: boolean;
  activityForm: boolean;
} = {
  projectForm: false,
  taskForm: false,
  activityForm: false,
};

const reducer = reducerWithInitialState(INITIAL_STATE)
  .case(toggleProjectForm, (state, payload) => ({
    ...state,
    projectForm: payload,
  }))
  .case(toggleTaskForm, (state, payload) => ({
    ...state,
    taskForm: payload,
  }))
  .case(toggleActivityForm, (state, payload) => ({
    ...state,
    activityForm: payload,
  }))
  .case(addProject, (state) => ({
    ...state,
    projectForm: true,
  }))
  .case(editProject, (state) => ({
    ...state,
    projectForm: true,
  }))
  .case(addTask, (state) => ({
    ...state,
    taskForm: true,
  }))
  .case(editTask, (state) => ({
    ...state,
    taskForm: true,
  }))
  .case(addActivity, (state) => ({
    ...state,
    activityForm: true,
  }))
  .case(editActivity, (state) => ({
    ...state,
    activityForm: true,
  }));

export default reducer;

export const selectProjectForm = createSelector(
  [(state: RootState) => state.ui.modal.projectForm],
  (projectForm) => projectForm,
);

export const selectTaskForm = createSelector(
  [(state: RootState) => state.ui.modal.taskForm],
  (taskForm) => taskForm,
);

export const selectActivityForm = createSelector(
  [(state: RootState) => state.ui.modal.activityForm],
  (activityForm) => activityForm,
);
