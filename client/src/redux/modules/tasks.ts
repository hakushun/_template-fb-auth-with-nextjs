import { createSelector } from 'reselect';
import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { Task } from './task';
import { RootState } from './reducers';
import { dummyTasks } from '../../config/dummydata';
import { sortTaskArray } from './sort';

export interface Tasks {
  list: Task[];
}
type CreatePayload = {
  title: string;
  dueDate: Date;
  description: string;
  userId: string;
};
const actionCreator = actionCreatorFactory();

// 本当は非同期処理
const create = actionCreator<CreatePayload>('CREATE_TASK');

const INITIAL_STATE: Tasks = { list: dummyTasks };

const reducer = reducerWithInitialState(INITIAL_STATE).case(
  create,
  (state, payload) => ({ ...state, ...payload }),
);

export default reducer;

export const selectTasks = createSelector(
  [(state: RootState) => state.resources.tasks.list],
  (tasks) => tasks,
);

export const selectOpenTasks = createSelector(
  [
    (state: RootState) => state.resources.tasks.list,
    (state: RootState) => state.ui.sort.tasks,
  ],
  (tasks, sortKey) =>
    sortTaskArray(
      tasks.filter((task) => task.status !== 'COMPLETE'),
      sortKey,
    ),
);

export const selectCloseTasks = createSelector(
  [(state: RootState) => state.resources.tasks.list],
  (tasks) => tasks.filter((task) => task.status === 'COMPLETE'),
);

export const selectRelatedTasks = createSelector(
  [
    (state: RootState) => state.resources.tasks.list,
    (state: RootState) => state.ui.project,
  ],
  (tasks, project) => tasks.filter((task) => task.projectId === project.id),
);

// 関数
export const getRelatedTasks = (tasks: Task[], projectId: string): Task[] =>
  tasks.filter((task) => task.projectId === projectId);

export const getOpenTasks = (tasks: Task[]): Task[] =>
  tasks.filter((task) => task.status !== 'COMPLETE');

export const countOpenRelatedTasks = (
  tasks: Task[],
  projectId: string,
): number => {
  const relatedTasks = getRelatedTasks(tasks, projectId);
  const openRelatedTasks = getOpenTasks(relatedTasks);
  return openRelatedTasks.length;
};

export const calculateProgress = (tasks: Task[], projectId: string): number => {
  const relatedTasks = getRelatedTasks(tasks, projectId);
  if (relatedTasks.length === 0) return 0;
  const openRelatedTasks = getOpenTasks(relatedTasks);
  return Math.round(
    ((relatedTasks.length - openRelatedTasks.length) / relatedTasks.length) *
      100,
  );
};
