import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withAuth } from '../../helpers/withAuth';
import { selectActivitiesRelatedTask } from '../../redux/modules/activities';
import {
  selectStatusList,
  toggleStatusList,
} from '../../redux/modules/dropdown';
import { toggleActivityForm, toggleTaskForm } from '../../redux/modules/modal';
import { edit } from '../../redux/modules/project';
import { selectTask } from '../../redux/modules/task';
import { selectRelatedTasks } from '../../redux/modules/tasks';
import { Task as Presentational } from './Task';

// 直接ページを訪れた時 task.idを拾えないので空になる
// エラーのハンドリングをする
const Component: React.VFC = () => {
  const dispatch = useDispatch();
  const isOpened = useSelector(selectStatusList);
  const task = useSelector(selectTask);
  const relatedTasks = useSelector(selectRelatedTasks);
  const relatedActivities = useSelector(selectActivitiesRelatedTask);

  const handleEdit = (id: string) => {
    dispatch(edit({ id }));
  };
  // dispatch(edit({ id }))の追加
  const toggleList = () => {
    dispatch(toggleStatusList());
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
      isOpened={isOpened}
      task={task}
      relatedTasks={relatedTasks}
      relatedActivities={relatedActivities}
      handleEdit={handleEdit}
      toggleList={toggleList}
      toggleTaskModal={toggleTaskModal}
      toggleActivityModal={toggleActivityModal}
    />
  );
};

export const Task = withAuth(Component);
