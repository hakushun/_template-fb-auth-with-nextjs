import React from 'react';
import { withAuth } from '../../helpers/withAuth';
import { Task as Presentational } from './Task';

const Component: React.VFC = () => <Presentational />;

export const Task = withAuth(Component);
