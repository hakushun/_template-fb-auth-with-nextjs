import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withAuth } from '../../helpers/withAuth';
import { selectActivitiesRelatedProject } from '../../redux/modules/activities';
import { add as addActivity } from '../../redux/modules/activity';
import {
  edit as editProject,
  selectProject,
} from '../../redux/modules/project';
import { add as addTask } from '../../redux/modules/task';
import { selectRelatedTasks } from '../../redux/modules/tasks';
import { Project as Presentational } from './Project';

// 直接ページを訪れた時 project.idを拾えないので空になる
// エラーのハンドリングをする
const Component: React.VFC = () => {
  const dispatch = useDispatch();
  const project = useSelector(selectProject);
  const relatedTasks = useSelector(selectRelatedTasks);
  const relatedActivities = useSelector(selectActivitiesRelatedProject);

  const hadleEditProject = (id: string) => {
    dispatch(editProject({ id }));
  };
  const hadleAddTask = (projectId: string) => {
    dispatch(addTask({ projectId }));
  };
  const hadleAddActivity = (projectId: string) => {
    dispatch(addActivity({ projectId }));
  };

  return (
    <Presentational
      project={project}
      relatedTasks={relatedTasks}
      relatedActivities={relatedActivities}
      hadleEditProject={hadleEditProject}
      hadleAddTask={hadleAddTask}
      hadleAddActivity={hadleAddActivity}
    />
  );
};

export const Project = withAuth(Component);
