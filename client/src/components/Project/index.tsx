import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withAuth } from '../../helpers/withAuth';
import { selectActivitiesRelatedProject } from '../../redux/modules/activities';
import {
  toggleActivityForm,
  toggleProjectForm,
  toggleTaskForm,
} from '../../redux/modules/modal';
import { selectProject } from '../../redux/modules/project';
import { selectRelatedTasks } from '../../redux/modules/tasks';
import { Project as Presentational } from './Project';

// 直接ページを訪れた時 project.idを拾えないので空になる
// エラーのハンドリングをする
const Component: React.VFC = () => {
  const dispatch = useDispatch();
  const project = useSelector(selectProject);
  const relatedTasks = useSelector(selectRelatedTasks);
  const relatedActivities = useSelector(selectActivitiesRelatedProject);

  // dispatch(edit({ id }))の追加
  const toggleProjectModal = () => {
    dispatch(toggleProjectForm());
  };
  // dispatch(edit({ id }))の追加
  const toggleTaskModal = () => {
    dispatch(toggleTaskForm());
  };
  // dispatch(edit({ id }))の追加
  const toggleActivityModal = () => {
    dispatch(toggleActivityForm());
  };
  return (
    <Presentational
      project={project}
      relatedTasks={relatedTasks}
      relatedActivities={relatedActivities}
      toggleProjectModal={toggleProjectModal}
      toggleTaskModal={toggleTaskModal}
      toggleActivityModal={toggleActivityModal}
    />
  );
};

export const Project = withAuth(Component);
