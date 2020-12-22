import React from 'react';
import { withAuth } from '../../helpers/withAuth';
import { Projects as Presentational } from './Projects';

const Component: React.VFC = () => <Presentational />;

export const Projects = withAuth(Component);
