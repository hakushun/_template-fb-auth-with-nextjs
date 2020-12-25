import Link from 'next/link';
import React from 'react';
import { getStaringDate } from '../../libs/date';
import { toStringStatus } from '../../libs/utils';
import { Task } from '../../redux/modules/task';
import { ListHeader } from '../ListHeader';
import styles from './index.module.scss';

type Props = {
  tasks: Task[];
  handleFocus: (_taskId: string, _projectId: string) => void;
};
// itemがなかった時の表示追加
export const TaskList: React.VFC<Props> = ({ tasks, handleFocus }) => (
  <div className={styles.wrapper}>
    <ListHeader context="task" />
    <ul className={styles.list}>
      {tasks.map((task) => (
        <li className={styles.item} key={task.id}>
          <Link href={`/tasks/${task.id}`}>
            <a
              id={`tasks_${task.id}`}
              className={styles.link}
              onClick={() => handleFocus(task.id!, task.projectId)}
              onKeyPress={() => handleFocus(task.id!, task.projectId)}>
              <div className={styles.status}>{toStringStatus(task.status)}</div>
              <div className={styles.name}>{task.title}</div>
              <div className={styles.duedate}>
                {getStaringDate(task.dueDate)}
              </div>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
