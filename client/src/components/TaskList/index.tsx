import React from 'react';
import { useDispatch } from 'react-redux';
import { edit as editProject } from '../../redux/modules/project';
import { focus, Task } from '../../redux/modules/task';
import { TaskList as Presentational } from './TaskList';

type Props = {
  tasks: Task[];
};
export const TaskList: React.VFC<Props> = ({ tasks }) => {
  const dispatch = useDispatch();

  // 本当はdispatch 2回飛ばしたくない
  const handleFocus = (taskId: string, projectId: string) => {
    dispatch(focus({ id: taskId, projectId }));
  };
  return <Presentational tasks={tasks} handleFocus={handleFocus} />;
};
