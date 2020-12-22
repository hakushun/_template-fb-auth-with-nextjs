import React from 'react';
import { withAuth } from '../../helpers/withAuth';
import { Project as Presentational } from './Project';

const Component: React.VFC = () => <Presentational />;

export const Project = withAuth(Component);
