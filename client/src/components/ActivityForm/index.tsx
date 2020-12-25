import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectActivity } from '../../redux/modules/activity';
import {
  selectActivityForm,
  toggleActivityForm,
} from '../../redux/modules/modal';
import { ActivityForm as Preasentational } from './ActivityForm';

export const ActivityForm: React.VFC = () => {
  const dispatch = useDispatch();
  const isOpened = useSelector(selectActivityForm);
  const activity = useSelector(selectActivity);
  const closeActivityModal = () => {
    dispatch(toggleActivityForm(false));
  };
  return (
    <>
      {isOpened && (
        <Preasentational
          initialValues={activity}
          closeActivityModal={closeActivityModal}
        />
      )}
    </>
  );
};
