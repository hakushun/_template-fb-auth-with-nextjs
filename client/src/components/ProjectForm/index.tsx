import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectProjectForm,
  toggleProjectForm,
} from '../../redux/modules/modal';
import { ProjectForm as Preasentational } from './ProjectForm';

// formにinitial vlaueを渡す
export const ProjectForm: React.VFC = () => {
  const dispatch = useDispatch();
  const isOpened = useSelector(selectProjectForm);
  const closeProjectModal = () => {
    dispatch(toggleProjectForm(false));
  };
  return (
    <>{isOpened && <Preasentational closeProjectModal={closeProjectModal} />}</>
  );
};
