import React from 'react';
import { useSelector } from 'react-redux';
import { withAuth } from '../../helpers/withAuth';
import {
  selectOpenProjects,
  selectCloseProjects,
} from '../../redux/modules/projects';
import { selectTasks } from '../../redux/modules/tasks';
import { Projects as Presentational } from './Projects';

const Component: React.VFC = () => {
  const openProjects = useSelector(selectOpenProjects);
  const closeProjects = useSelector(selectCloseProjects);
  const tasks = useSelector(selectTasks);

  return (
    <Presentational
      openProjects={openProjects}
      closeProjects={closeProjects}
      tasks={tasks}
    />
  );
};

export const Projects = withAuth(Component);
