import React from 'react';
import { useDispatch } from 'react-redux';
import { edit as editProject } from '../../redux/modules/project';
import { edit as editTask, Task } from '../../redux/modules/task';
import { TaskList as Presentational } from './TaskList';

type Props = {
  tasks: Task[];
};
export const TaskList: React.VFC<Props> = ({ tasks }) => {
  const dispatch = useDispatch();

  // 本当はdispatch 2回飛ばしたくない
  const handleEdit = (taskId: string, projectId: string) => {
    dispatch(editTask({ id: taskId }));
    dispatch(editProject({ id: projectId }));
  };
  return <Presentational tasks={tasks} handleEdit={handleEdit} />;
};
