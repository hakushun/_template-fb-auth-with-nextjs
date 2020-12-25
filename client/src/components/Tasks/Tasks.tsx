import React from 'react';
import { Task } from '../../redux/modules/task';
import { TaskForm } from '../TaskForm';
import { TaskList } from '../TaskList';
import styles from './index.module.scss';

type Props = {
  openTasks: Task[];
  closeTasks: Task[];
  handleAddTask: () => void;
};
export const Tasks: React.VFC<Props> = ({
  openTasks,
  closeTasks,
  handleAddTask,
}) => (
  <>
    <TaskForm />
    <section className={styles.wrpper}>
      <div className={styles.heading}>
        <h2 className={styles.title}>Open Task List</h2>
        <button
          type="button"
          className={styles.action}
          onClick={() => handleAddTask()}>
          <img src="/images/icon-circle-plus.svg" alt="タスクを追加する" />
        </button>
      </div>
      <TaskList tasks={openTasks} />
    </section>
    <section className={styles.wrpper}>
      <h2 className={styles.title}>Close Task List</h2>
      <TaskList tasks={closeTasks} />
    </section>
  </>
);
