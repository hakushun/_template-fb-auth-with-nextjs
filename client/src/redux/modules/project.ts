import { createSelector } from 'reselect';
import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { RootState } from './reducers';

export interface Project {
  id?: string;
  title: string;
  dueDate: Date;
  overview: string;
  userId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const actionCreator = actionCreatorFactory();

export const add = actionCreator('ADD_PROJECT');
export const edit = actionCreator<{ id: string }>('EDIT_PROJECT');

const INITIAL_STATE: Project = { title: '', dueDate: new Date(), overview: '' };

const reducer = reducerWithInitialState(INITIAL_STATE)
  .case(add, () => ({ ...INITIAL_STATE }))
  .case(edit, (state, payload) => ({
    ...state,
    id: payload.id,
  }));

export default reducer;

export const selectProject = createSelector(
  [
    (state: RootState) => state.ui.project,
    (state: RootState) => state.resources.projects.list,
  ],
  (project, projects) => {
    const target = projects.find((prj) => prj.id === project.id);
    if (!target) return { ...INITIAL_STATE };
    return target;
  },
);