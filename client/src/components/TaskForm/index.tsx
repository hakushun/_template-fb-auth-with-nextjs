import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTaskForm, toggleTaskForm } from '../../redux/modules/modal';
import { selectProjects } from '../../redux/modules/projects';
import { selectTask } from '../../redux/modules/task';
import { create, CreatePayload } from '../../redux/modules/tasks';
import { TaskForm as Preasentational } from './TaskForm';

export const TaskForm: React.VFC = () => {
  const dispatch = useDispatch();
  const isOpened = useSelector(selectTaskForm);
  const task = useSelector(selectTask);
  const projects = useSelector(selectProjects);
  const closeTaskModal = () => {
    dispatch(toggleTaskForm(false));
  };
  const createTask = (data: CreatePayload) => {
    dispatch(create(data));
  };
  return (
    <>
      {isOpened && (
        <Preasentational
          initialValues={task}
          projects={projects}
          closeTaskModal={closeTaskModal}
          createTask={createTask}
        />
      )}
    </>
  );
};
