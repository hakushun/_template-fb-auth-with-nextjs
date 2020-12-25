import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectProjectForm,
  toggleProjectForm,
} from '../../redux/modules/modal';
import { selectProject } from '../../redux/modules/project';
import { ProjectForm as Preasentational } from './ProjectForm';

export const ProjectForm: React.VFC = () => {
  const dispatch = useDispatch();
  const isOpened = useSelector(selectProjectForm);
  const project = useSelector(selectProject);
  const closeProjectModal = () => {
    dispatch(toggleProjectForm(false));
  };
  return (
    <>
      {isOpened && (
        <Preasentational
          initialValues={project}
          closeProjectModal={closeProjectModal}
        />
      )}
    </>
  );
};
