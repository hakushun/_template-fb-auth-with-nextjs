import React from 'react';
import { Task } from '../../redux/modules/task';
import { TaskList } from '../TaskList';
import styles from './index.module.scss';

type Props = {
  openTasks: Task[];
  closeTasks: Task[];
};
export const Tasks: React.VFC<Props> = ({ openTasks, closeTasks }) => (
  <>
    <section className={styles.wrpper}>
      {/* add bottuonの追加 */}
      <h2 className={styles.title}>Open Task List</h2>
      <TaskList tasks={openTasks} />
    </section>
    <section className={styles.wrpper}>
      <h2 className={styles.title}>Close Task List</h2>
      <TaskList tasks={closeTasks} />
    </section>
  </>
);
