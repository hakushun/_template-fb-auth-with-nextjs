import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTasksSortKey, sortTasks } from '../../redux/modules/sort';
import { TaskListHeader as Presentational } from './TaskListHeader';

export const TaskListHeader: React.VFC = () => {
  const dispatch = useDispatch();
  const tasksSortKey = useSelector(selectTasksSortKey);

  const handleSrotTasks = (key: 'status' | 'dueDate') => {
    const value = tasksSortKey[key] === 'up' ? 'down' : 'up';
    dispatch(sortTasks({ [key]: value }));
  };
  return (
    <Presentational
      tasksSortKey={tasksSortKey}
      handleSrotTasks={handleSrotTasks}
    />
  );
};
