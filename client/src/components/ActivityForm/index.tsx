import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withAuth } from '../../helpers/withAuth';
import {
  selectActivityForm,
  toggleActivityForm,
} from '../../redux/modules/modal';
import { ActivityForm as Preasentational } from './ActivityForm';

const Component: React.VFC = () => {
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

export const ActivityForm = withAuth(Component);
