import React from 'react';
import { useDispatch } from 'react-redux';
import { remove } from '../../redux/modules/activities';
import { Activity, edit } from '../../redux/modules/activity';
import { ActivityList as Presentational } from './ActivityList';

type Props = {
  activities: Activity[];
};
export const ActivityList: React.VFC<Props> = ({ activities }) => {
  const dispatch = useDispatch();

  const handleEdit = (id: string) => {
    dispatch(edit({ id }));
  };
  const handleRemove = (id: string) => {
    dispatch(remove({ id }));
  };
  return (
    <Presentational
      activities={activities}
      handleEdit={handleEdit}
      handleRemove={handleRemove}
    />
  );
};
