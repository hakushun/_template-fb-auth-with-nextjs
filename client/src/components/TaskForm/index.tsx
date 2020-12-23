import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withAuth } from '../../helpers/withAuth';
import { selectTaskForm, toggleTaskForm } from '../../redux/modules/modal';
import { TaskForm as Preasentational } from './TaskForm';

const Component: React.VFC = () => {
  const dispatch = useDispatch();
  const isOpened = useSelector(selectTaskForm);
  const toggleTaskModal = () => {
    dispatch(toggleTaskForm());
  };
  return (
    <>{isOpened && <Preasentational toggleTaskModal={toggleTaskModal} />}</>
  );
};

export const TaskForm = withAuth(Component);
