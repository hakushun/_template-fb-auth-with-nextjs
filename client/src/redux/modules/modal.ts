import { createSelector } from 'reselect';
import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { RootState } from './reducers';

const actionCreator = actionCreatorFactory();

export const toggleProjectForm = actionCreator('TOGGLE_PROJECT_FORM');
export const toggleTaskForm = actionCreator('TOGGLE_TASK_FORM');
export const toggleActivityForm = actionCreator('TOGGLE_Activity_FORM');

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
  .case(toggleProjectForm, (state) => ({
    ...state,
    projectForm: !state.projectForm,
  }))
  .case(toggleTaskForm, (state) => ({
    ...state,
    taskForm: !state.taskForm,
  }))
  .case(toggleActivityForm, (state) => ({
    ...state,
    activityForm: !state.activityForm,
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
