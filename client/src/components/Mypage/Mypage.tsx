import React from 'react';
import { Project } from '../../redux/modules/project';
import { Task } from '../../redux/modules/task';
import { ProjectForm } from '../ProjectForm';
import { ProjectList } from '../ProjectList';
import { TaskForm } from '../TaskForm';
import { TaskList } from '../TaskList';
import styles from './index.module.scss';

type Props = {
  projects: Project[];
  tasks: Task[];
  openTasks: Task[];
  handleAddProject: () => void;
  handleAddTask: () => void;
};
export const Mypage: React.VFC<Props> = ({
  projects,
  tasks,
  openTasks,
  handleAddProject,
  handleAddTask,
}) => (
  <>
    <ProjectForm />
    <TaskForm />
    <section className={styles.wrpper}>
      <div className={styles.heading}>
        <h2 className={styles.title}>Open Project List</h2>
        <button
          type="button"
          className={styles.action}
          onClick={() => handleAddProject()}>
          <img src="/images/icon-circle-plus.svg" alt="タスクを追加する" />
        </button>
      </div>
      <ProjectList projects={projects} tasks={tasks} />
    </section>
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
  </>
);
