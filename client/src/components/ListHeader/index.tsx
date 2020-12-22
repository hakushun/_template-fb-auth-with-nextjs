import React from 'react';
import { ListHeader as Presentational } from './ListHeader';

type Props = {
  context: 'project' | 'task';
};
export const ListHeader: React.VFC<Props> = ({ context }) => (
  <Presentational context={context} />
);
