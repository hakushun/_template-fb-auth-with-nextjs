import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleStatusList } from '../../redux/modules/dropdown';
import { TaskStatusList as Presentational } from './TaskStatusList';

export const TaskStatusList: React.VFC = () => {
  const dispatch = useDispatch();

  const toggleList = () => {
    dispatch(toggleStatusList());
  };
  return <Presentational toggleList={toggleList} />;
};
