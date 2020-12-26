import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectProjectsSortKey, sortProjects } from '../../redux/modules/sort';
import { ProjectListHeader as Presentational } from './ProjectListHeader';

export const ProjectListHeader: React.VFC = () => {
  const dispatch = useDispatch();
  const projectsSortKey = useSelector(selectProjectsSortKey);

  const handleSrotProjects = (key: 'progress' | 'openTask') => {
    const value = projectsSortKey[key] === 'up' ? 'down' : 'up';
    dispatch(sortProjects({ [key]: value }));
  };
  return (
    <Presentational
      projectsSortKey={projectsSortKey}
      handleSrotProjects={handleSrotProjects}
    />
  );
};
