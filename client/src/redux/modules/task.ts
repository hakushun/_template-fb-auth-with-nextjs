import { createSelector } from 'reselect';
import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { RootState } from './reducers';

export type TaskStatus = 'NEW' | 'IN_PROGRESS' | 'REVIEWING' | 'COMPLETE';

export interface Task {
  id?: string;
  projectId: string;
  title: string;
  dueDate: Date;
  description: string;
  status: TaskStatus;
  userId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const actionCreator = actionCreatorFactory();

export const add = actionCreator<{ projectId: string } | null>('ADD_TASK');
export const edit = actionCreator<{ id: string }>('EDIT_TASK');

const INITIAL_STATE: Task = {
  projectId: '',
  title: '',
  dueDate: new Date(),
  description: '',
  status: 'NEW',
};

const reducer = reducerWithInitialState(INITIAL_STATE)
  .case(add, (_state, payload) => {
    if (!payload) return { ...INITIAL_STATE };
    return {
      ...INITIAL_STATE,
      projectId: payload.projectId,
    };
  })
  .case(edit, (state, payload) => ({
    ...state,
    id: payload.id,
  }));

export default reducer;

export const selectTask = createSelector(
  [
    (state: RootState) => state.ui.task,
    (state: RootState) => state.resources.tasks.list,
  ],
  (task, tasks) => {
    const target = tasks.find((tsk) => tsk.id === task.id);
    if (!target) return { ...INITIAL_STATE };
    return target;
  },
);