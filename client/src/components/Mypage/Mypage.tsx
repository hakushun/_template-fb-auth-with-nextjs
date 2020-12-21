import React from 'react';
import { ProjectList } from '../ProjectList';
import { TaskList } from '../TaskList';
import styles from './index.module.scss';

export const Mypage: React.VFC = () => (
  <>
    <section className={styles.wrpper}>
      <h2 className={styles.title}>プロジェクト一覧</h2>
      <ProjectList />
    </section>
    <section className={styles.wrpper}>
      <h2 className={styles.title}>タスク一覧</h2>
      <TaskList />
    </section>
  </>
);
