import React from 'react';
import { withAuth } from '../../helpers/withAuth';

const Component: React.VFC = () => <div>mypage</div>;

export const Mypage = withAuth(Component);
