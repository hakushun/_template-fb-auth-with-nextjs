import React from 'react';
import { Project } from '../../redux/modules/project';
import { Task } from '../../redux/modules/task';
import { ProjectList } from '../ProjectList';
import styles from './index.module.scss';

type Props = {
  openProjects: Project[];
  closeProjects: Project[];
  tasks: Task[];
};
export const Projects: React.VFC<Props> = ({
  openProjects,
  closeProjects,
  tasks,
}) => (
  <>
    <section className={styles.wrpper}>
      {/* add bottuonの追加 */}
      <h2 className={styles.title}>Open Project List</h2>
      <ProjectList projects={openProjects} tasks={tasks} />
    </section>
    <section className={styles.wrpper}>
      <h2 className={styles.title}>Close Project List</h2>
      <ProjectList projects={closeProjects} tasks={tasks} />
    </section>
  </>
);
