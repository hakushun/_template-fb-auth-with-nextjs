import React from 'react';
import { TaskList } from '../TaskList';
import styles from './index.module.scss';

export const Tasks: React.VFC = () => (
  <>
    <section className={styles.wrpper}>
      <h2 className={styles.title}>Open Task List</h2>
      <TaskList />
    </section>
    <section className={styles.wrpper}>
      <h2 className={styles.title}>Close Task List</h2>
      <TaskList />
    </section>
  </>
);
