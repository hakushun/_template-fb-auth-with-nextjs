import { createSelector } from 'reselect';
import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { dummyActivities } from '../../config/dummydata';
import { Activity } from './activity';
import { RootState } from './reducers';

export interface Activities {
  list: Activity[];
}
// projectId | taskIdのどっちか一方は必ず存在する
type CreatePayload = {
  projectId?: string;
  taskId?: string;
  comment: string;
};
const actionCreator = actionCreatorFactory();

// 本当は非同期処理
const create = actionCreator<CreatePayload>('CREATE_ACTIVITY');

const INITIAL_STATE: Activities = { list: dummyActivities };

const reducer = reducerWithInitialState(INITIAL_STATE).case(
  create,
  (state, payload) => ({ ...state, ...payload }),
);

export default reducer;

export const selectActivities = createSelector(
  [(state: RootState) => state.resources.activities.list],
  (activities) => activities,
);

export const selectActivitiesRelatedProject = createSelector(
  [
    (state: RootState) => state.resources.activities.list,
    (state: RootState) => state.ui.project,
  ],
  (activities, project) =>
    activities.filter((activity) => activity.projectId === project.id),
);

export const selectActivitiesRelatedTask = createSelector(
  [
    (state: RootState) => state.resources.activities.list,
    (state: RootState) => state.ui.task,
  ],
  (activities, task) =>
    activities.filter((activity) => activity.taskId === task.id),
);
