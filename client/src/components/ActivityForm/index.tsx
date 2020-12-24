import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectActivityForm,
  toggleActivityForm,
} from '../../redux/modules/modal';
import { ActivityForm as Preasentational } from './ActivityForm';

// formにinitial vlaueを渡す
export const ActivityForm: React.VFC = () => {
  const dispatch = useDispatch();
  const isOpened = useSelector(selectActivityForm);
  const toggleActivityModal = () => {
    dispatch(toggleActivityForm());
  };
  return (
    <>
      {isOpened && (
        <Preasentational toggleActivityModal={toggleActivityModal} />
      )}
    </>
  );
};
