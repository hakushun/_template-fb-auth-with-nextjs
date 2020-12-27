import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { create, CreatePayload } from '../../redux/modules/activities';
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
  const createActivity = (data: CreatePayload) => {
    dispatch(create(data));
  };
  return (
    <>
      {isOpened && (
        <Preasentational
          initialValues={activity}
          closeActivityModal={closeActivityModal}
          createActivity={createActivity}
        />
      )}
    </>
  );
};
