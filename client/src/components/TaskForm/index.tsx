import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTaskForm, toggleTaskForm } from '../../redux/modules/modal';
import { TaskForm as Preasentational } from './TaskForm';

// formにinitial vlaueを渡す
export const TaskForm: React.VFC = () => {
  const dispatch = useDispatch();
  const isOpened = useSelector(selectTaskForm);
  const toggleTaskModal = () => {
    dispatch(toggleTaskForm());
  };
  return (
    <>{isOpened && <Preasentational toggleTaskModal={toggleTaskModal} />}</>
  );
};
