import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withAuth } from '../../helpers/withAuth';
import {
  selectProjectForm,
  toggleProjectForm,
} from '../../redux/modules/modal';
import { ProjectForm as Preasentational } from './ProjectForm';

const Component: React.VFC = () => {
  const dispatch = useDispatch();
  const isOpened = useSelector(selectProjectForm);
  const toggleProjectModal = () => {
    dispatch(toggleProjectForm());
  };
  return (
    <>
      {isOpened && <Preasentational toggleProjectModal={toggleProjectModal} />}
    </>
  );
};

export const ProjectForm = withAuth(Component);
