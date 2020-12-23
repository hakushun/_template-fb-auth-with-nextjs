import React from 'react';
import { useDispatch } from 'react-redux';
import { withAuth } from '../../helpers/withAuth';
import {
  toggleActivityForm,
  toggleProjectForm,
  toggleTaskForm,
} from '../../redux/modules/modal';
import { Project as Presentational } from './Project';

const Component: React.VFC = () => {
  const dispatch = useDispatch();
  const toggleProjectModal = () => {
    dispatch(toggleProjectForm());
  };
  const toggleTaskModal = () => {
    dispatch(toggleTaskForm());
  };
  const toggleActivityModal = () => {
    dispatch(toggleActivityForm());
  };
  return (
    <Presentational
      toggleProjectModal={toggleProjectModal}
      toggleTaskModal={toggleTaskModal}
      toggleActivityModal={toggleActivityModal}
    />
  );
};

export const Project = withAuth(Component);
