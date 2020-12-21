import React from 'react';
import { Mypage as Presentational } from './Mypage';
import { withAuth } from '../../helpers/withAuth';

const Component: React.VFC = () => <Presentational />;

export const Mypage = withAuth(Component);
