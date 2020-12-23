import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withAuth } from '../../helpers/withAuth';
import {
  selectStatusList,
  toggleStatusList,
} from '../../redux/modules/dropdown';
import { toggleActivityForm, toggleTaskForm } from '../../redux/modules/modal';
import { Task as Presentational } from './Task';

const Component: React.VFC = () => {
  const dispatch = useDispatch();
  const isOpened = useSelector(selectStatusList);

  const toggleList = () => {
    dispatch(toggleStatusList());
  };
  const toggleTaskModal = () => {
    dispatch(toggleTaskForm());
  };
  const toggleActivityModal = () => {
    dispatch(toggleActivityForm());
  };
  return (
    <Presentational
      isOpened={isOpened}
      toggleList={toggleList}
      toggleTaskModal={toggleTaskModal}
      toggleActivityModal={toggleActivityModal}
    />
  );
};

export const Task = withAuth(Component);
