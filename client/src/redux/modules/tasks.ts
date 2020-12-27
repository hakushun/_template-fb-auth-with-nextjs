import { createSelector } from 'reselect';
import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { StepAction, steps } from 'redux-effects-steps';
import { Task, TaskStatus } from './task';
import { RootState } from './reducers';
import { sortTaskArray } from './sort';
import { postTask, putTask } from '../../libs/axios';

export interface Tasks {
  list: Task[];
  isLoading: boolean;
}
export type CreatePayload = {
  projectId: string;
  title: string;
  dueDate: string;
  description: string;
  status: TaskStatus;
};
export type UpdatePayload = {
  id: string;
  projectId: string;
  title: string;
  dueDate: string;
  description: string;
  status: TaskStatus;
  userId: string;
  createdAt: number;
  updatedAt: number;
};
type Error = {
  name: string;
  message: string;
};
const actionCreator = actionCreatorFactory();

export const createActions = actionCreator.async<CreatePayload, Task, Error>(
  'CREATE_TASK',
);
export const create = (body: CreatePayload): StepAction =>
  steps(createActions.started(body), () => postTask(body), [
    ({ data }) => createActions.done({ params: body, result: data }),
    (error) => createActions.failed({ params: body, error }),
  ]);

export const updateActions = actionCreator.async<UpdatePayload, Task, Error>(
  'UPDATE_TASK',
);
export const update = (body: UpdatePayload): StepAction =>
  steps(updateActions.started(body), () => putTask(body), [
    ({ data }) => updateActions.done({ params: body, result: data }),
    (error) => updateActions.failed({ params: body, error }),
  ]);

const INITIAL_STATE: Tasks = { list: [], isLoading: false };

const reducer = reducerWithInitialState(INITIAL_STATE)
  .case(createActions.started, (state) => ({ ...state, isLoading: true }))
  .case(createActions.done, (state, { result }) => ({
    ...state,
    isLoading: false,
    list: [...state.list, result],
  }))
  .case(createActions.failed, (state) => ({ ...state, isLoading: false }))
  .case(updateActions.started, (state) => ({ ...state, isLoading: true }))
  .case(updateActions.done, (state, { result }) => ({
    ...state,
    isLoading: false,
    list: [
      ...state.list.map((item) => {
        if (item.id === result.id) return result;
        return item;
      }),
    ],
  }))
  .case(updateActions.failed, (state) => ({ ...state, isLoading: false }));

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

export const selectIsLoading = createSelector(
  [(state: RootState) => state.resources.tasks.isLoading],
  (isLoading) => isLoading,
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
