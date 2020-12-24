import React from 'react';
import { useDispatch } from 'react-redux';
import { edit, Project } from '../../redux/modules/project';
import { Task } from '../../redux/modules/task';
import { ProjectList as Presentational } from './ProjectList';

type Props = {
  projects: Project[];
  tasks: Task[];
};
export const ProjectList: React.VFC<Props> = ({ projects, tasks }) => {
  const dispatch = useDispatch();

  const handleEdit = (id: string) => {
    dispatch(edit({ id }));
  };

  return (
    <Presentational projects={projects} tasks={tasks} handleEdit={handleEdit} />
  );
};
