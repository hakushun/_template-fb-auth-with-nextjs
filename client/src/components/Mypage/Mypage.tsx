import React from 'react';
import { Project } from '../../redux/modules/project';
import { Task } from '../../redux/modules/task';
import { ProjectList } from '../ProjectList';
import { TaskList } from '../TaskList';
import styles from './index.module.scss';

type Props = {
  projects: Project[];
  tasks: Task[];
  openTasks: Task[];
};
export const Mypage: React.VFC<Props> = ({ projects, tasks, openTasks }) => (
  <>
    <section className={styles.wrpper}>
      {/* add bottuonの追加 */}
      <h2 className={styles.title}>Open Project List</h2>
      <ProjectList projects={projects} tasks={tasks} />
    </section>
    <section className={styles.wrpper}>
      {/* add bottuonの追加 */}
      <h2 className={styles.title}>Open Task List</h2>
      <TaskList tasks={openTasks} />
    </section>
  </>
);
