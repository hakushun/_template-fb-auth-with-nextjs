import React from 'react';
import { withAuth } from '../../helpers/withAuth';
import { ProjectList as Presentational } from './ProjectList';

const Component: React.VFC = () => <Presentational />;

export const ProjectList = withAuth(Component);
