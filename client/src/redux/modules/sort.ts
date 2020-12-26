import { createSelector } from 'reselect';
import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { RootState } from './reducers';

export type ProjectsSortKey = {
  progress?: 'up' | 'down ';
  openTask?: 'up' | 'down ';
};
export type TasksSortKey = {
  status?: 'up' | 'down ';
  dueDate?: 'up' | 'down ';
};

const actionCreator = actionCreatorFactory();

export const sortProjects = actionCreator<ProjectsSortKey>('SORT_PROJECTS');
export const sortTasks = actionCreator<TasksSortKey>('SORT_TASKS');

const INITIAL_STATE: {
  projects: ProjectsSortKey;
  tasks: TasksSortKey;
} = {
  projects: { progress: 'up' },
  tasks: { status: 'up' },
};

const reducer = reducerWithInitialState(INITIAL_STATE)
  .case(sortProjects, (state, payload) => ({
    ...state,
    projects: { ...payload },
  }))
  .case(sortTasks, (state, payload) => ({
    ...state,
    tasks: payload,
  }));

export default reducer;

export const selectProjectsSortKey = createSelector(
  [(state: RootState) => state.ui.sort.projects],
  (projects) => projects,
);

export const selectTasksSortKey = createSelector(
  [(state: RootState) => state.ui.sort.tasks],
  (tasks) => tasks,
);
