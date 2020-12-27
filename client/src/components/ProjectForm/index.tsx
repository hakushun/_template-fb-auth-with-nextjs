import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectProjectForm,
  toggleProjectForm,
} from '../../redux/modules/modal';
import { selectProject } from '../../redux/modules/project';
import { create, CreatePayload } from '../../redux/modules/projects';
import { ProjectForm as Preasentational } from './ProjectForm';

export const ProjectForm: React.VFC = () => {
  const dispatch = useDispatch();
  const isOpened = useSelector(selectProjectForm);
  const project = useSelector(selectProject);
  const closeProjectModal = () => {
    dispatch(toggleProjectForm(false));
  };
  const createProject = (data: CreatePayload) => {
    dispatch(create(data));
  };
  return (
    <>
      {isOpened && (
        <Preasentational
          initialValues={project}
          closeProjectModal={closeProjectModal}
          createProject={createProject}
        />
      )}
    </>
  );
};
