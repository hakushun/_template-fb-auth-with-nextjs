import React from 'react';
import { withAuth } from '../../helpers/withAuth';
import { TaskForm as Preasentational } from './TaskForm';

const Component: React.VFC = () => <Preasentational />;

export const TaskForm = withAuth(Component);
