import React from 'react';
import { withAuth } from '../../helpers/withAuth';
import { ProjectForm as Preasentational } from './ProjectForm';

const Component: React.VFC = () => <Preasentational />;

export const ProjectForm = withAuth(Component);
