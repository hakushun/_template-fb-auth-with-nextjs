import React from 'react';
import { withAuth } from '../../helpers/withAth';

const Component: React.VFC = () => <div>Starter Kit</div>;

export const Home = withAuth(Component);
