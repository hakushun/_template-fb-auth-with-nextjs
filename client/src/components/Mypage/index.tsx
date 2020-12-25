import React from 'react';
import { useSelector } from 'react-redux';
import { Mypage as Presentational } from './Mypage';
import { withAuth } from '../../helpers/withAuth';
import { selectOpenProjects } from '../../redux/modules/projects';
import { selectOpenTasks, selectTasks } from '../../redux/modules/tasks';

const Component: React.VFC = () => {
  const projects = useSelector(selectOpenProjects);
  const tasks = useSelector(selectTasks);
  const openTasks = useSelector(selectOpenTasks);

  return (
    <Presentational projects={projects} tasks={tasks} openTasks={openTasks} />
  );
};

export const Mypage = withAuth(Component);
