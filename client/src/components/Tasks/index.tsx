import React from 'react';
import { withAuth } from '../../helpers/withAuth';
import { Tasks as Presentational } from './Tasks';

const Component: React.VFC = () => <Presentational />;

export const Tasks = withAuth(Component);
