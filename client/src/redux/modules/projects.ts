import { createSelector } from 'reselect';
import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { dummyProjects } from '../../config/dummydata';
import { Project } from './project';
import { RootState } from './reducers';

export interface Projects {
  list: Project[];
}
type CreatePayload = {
  title: string;
  dueDate: Date;
  detail: string;
  userId: string;
};
const actionCreator = actionCreatorFactory();

// 本当は非同期処理
const create = actionCreator<CreatePayload>('CREATE_PROJECT');

const INITIAL_STATE: Projects = { list: dummyProjects };

const reducer = reducerWithInitialState(INITIAL_STATE).case(
  create,
  (state, payload) => ({ ...state, ...payload }),
);

export default reducer;

export const selectProjects = createSelector(
  [(state: RootState) => state.resources.projects.list],
  (projects) => projects,
);

export const selectOpenProjects = createSelector(
  [
    (state: RootState) => state.resources.projects.list,
    (state: RootState) => state.resources.tasks.list,
  ],
  (projects, tasks) =>
    projects.filter((project) => {
      const relatedTasks = tasks.filter(
        (task) => task.projectId === project.id,
      );
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
      const relatedTasks = tasks.filter(
        (task) => task.projectId === project.id,
      );
      if (relatedTasks.length === 0) return false;
      return relatedTasks.every((task) => task.status === 'COMPLETE');
    }),
);
