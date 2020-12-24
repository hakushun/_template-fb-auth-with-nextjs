import React from 'react';
import { useSelector } from 'react-redux';
import { withAuth } from '../../helpers/withAuth';
import { selectOpenTasks, selectCloseTasks } from '../../redux/modules/tasks';
import { Tasks as Presentational } from './Tasks';

const Component: React.VFC = () => {
  const openTasks = useSelector(selectOpenTasks);
  const closeTasks = useSelector(selectCloseTasks);

  return <Presentational openTasks={openTasks} closeTasks={closeTasks} />;
};

export const Tasks = withAuth(Component);
