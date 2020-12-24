import { createSelector } from 'reselect';
import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { RootState } from './reducers';

export interface Activity {
  id?: string;
  projectId?: string;
  taskId?: string;
  comment: string;
  userId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
type RelatedId = 'projectId' | 'taskId';
// projectId | taskIdのどっちか一方が必ず含まれる
export type AddPayload<K extends RelatedId> = {
  // eslint-disable-next-line no-unused-vars
  [key in K]: string;
};
const actionCreator = actionCreatorFactory();

export const add = actionCreator<AddPayload<RelatedId>>('ADD_ACTIVITY');
export const edit = actionCreator<{ id: string }>('EDIT_ACTIVITY');

const INITIAL_STATE: Activity = { comment: '' };

const reducer = reducerWithInitialState(INITIAL_STATE)
  .case(add, (state, payload) => {
    if (payload.projectId)
      return {
        ...state,
        projectId: payload.projectId,
      };
    if (payload.taskId)
      return {
        ...state,
        taskId: payload.taskId,
      };
    return { ...INITIAL_STATE };
  })
  .case(edit, (state, payload) => ({
    ...state,
    id: payload.id,
  }));
export default reducer;

export const selectActivity = createSelector(
  [
    (state: RootState) => state.ui.activity,
    (state: RootState) => state.resources.activities.list,
  ],
  (activity, activities) => {
    const target = activities.find((actvty) => actvty.id === activity.id);
    if (!target) return { ...INITIAL_STATE };
    return target;
  },
);
