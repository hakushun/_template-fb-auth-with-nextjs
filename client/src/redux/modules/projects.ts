import { StepAction, steps } from 'redux-effects-steps';
import { createSelector } from 'reselect';
import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { dummyProjects } from '../../config/dummydata';
import { postProject } from '../../libs/axios';
import { Project } from './project';
import { RootState } from './reducers';
import { sortProjectArray } from './sort';
import { getRelatedTasks } from './tasks';

export interface Projects {
  list: Project[];
  isLoading: boolean;
}
export type CreatePayload = {
  title: string;
  dueDate: Date;
  detail: string;
};
type Error = {
  name: string;
  message: string;
};
const actionCreator = actionCreatorFactory();

export const createActions = actionCreator.async<CreatePayload, Project, Error>(
  'CREATE_PROJECT',
);
export const create = (body: CreatePayload): StepAction =>
  steps(createActions.started(body), () => postProject(body), [
    ({ data }) => createActions.done({ params: body, result: data }),
    (error) => createActions.failed({ params: body, error }),
  ]);

const INITIAL_STATE: Projects = { list: dummyProjects, isLoading: false };

const reducer = reducerWithInitialState(INITIAL_STATE)
  .case(createActions.started, (state) => ({ ...state, isLoading: true }))
  .case(createActions.done, (state, { result }) => ({
    ...state,
    isLoading: false,
    list: [...state.list, result],
  }))
  .case(createActions.failed, (state) => ({ ...state, isLoading: false }));

export default reducer;

export const selectProjects = createSelector(
  [(state: RootState) => state.resources.projects.list],
  (projects) => projects,
);

export const selectOpenProjects = createSelector(
  [
    (state: RootState) => state.resources.projects.list,
    (state: RootState) => state.resources.tasks.list,
    (state: RootState) => state.ui.sort.projects,
  ],
  (projects, tasks, sortKey) =>
    sortProjectArray(projects, tasks, sortKey).filter((project) => {
      const relatedTasks = getRelatedTasks(tasks, project.id!);
      if (relatedTasks.length === 0) return true;
      return relatedTasks.some((task) => task.status !== 'COMPLETE');
    }),
);

export const selectCloseProjects = createSelector(
  [
    (state: RootState) => state.resources.projects.list,
    (state: RootState) => state.resources.tasks.list,
  ],
  (projects, tasks) =>
    projects.filter((project) => {
      const relatedTasks = getRelatedTasks(tasks, project.id!);
      if (relatedTasks.length === 0) return false;
      return relatedTasks.every((task) => task.status === 'COMPLETE');
    }),
);
