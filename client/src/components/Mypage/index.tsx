import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Mypage as Presentational } from './Mypage';
import { withAuth } from '../../helpers/withAuth';
import { selectOpenProjects } from '../../redux/modules/projects';
import { selectOpenTasks, selectTasks } from '../../redux/modules/tasks';
import { add as addProject } from '../../redux/modules/project';
import { add as addTask } from '../../redux/modules/task';

const Component: React.VFC = () => {
  const dispatch = useDispatch();

  const projects = useSelector(selectOpenProjects);
  const tasks = useSelector(selectTasks);
  const openTasks = useSelector(selectOpenTasks);

  const handleAddProject = () => {
    dispatch(addProject());
  };
  const handleAddTask = () => {
    dispatch(addTask(null));
  };
  return (
    <Presentational
      projects={projects}
      tasks={tasks}
      openTasks={openTasks}
      handleAddProject={handleAddProject}
      handleAddTask={handleAddTask}
    />
  );
};

export const Mypage = withAuth(Component);
