import { TaskStatus } from '../redux/modules/task';

export const toStringStatus = (status: TaskStatus): string => {
  switch (status) {
    case 'NEW':
      return '未着手';
    case 'IN_PROGRESS':
      return '進行中';
    case 'REVIEWING':
      return 'FB待ち';
    case 'COMPLETE':
      return '完了';
    default:
      return '未着手';
  }
};
