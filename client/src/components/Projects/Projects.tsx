import React from 'react';
import { ProjectList } from '../ProjectList';
import styles from './index.module.scss';

export const Projects: React.VFC = () => (
  <>
    <section className={styles.wrpper}>
      <h2 className={styles.title}>Open Project List</h2>
      <ProjectList />
    </section>
    <section className={styles.wrpper}>
      <h2 className={styles.title}>Close Project List</h2>
      <ProjectList />
    </section>
  </>
);
