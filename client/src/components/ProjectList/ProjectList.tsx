import Link from 'next/link';
import React from 'react';
import { Project } from '../../redux/modules/project';
import { Task } from '../../redux/modules/task';
import {
  calculateProgress,
  countOpenRelatedTasks,
} from '../../redux/modules/tasks';
import { ListHeader } from '../ListHeader';
import styles from './index.module.scss';

type Props = {
  projects: Project[];
  tasks: Task[];
  handleEdit: (_id: string) => void;
};
export const ProjectList: React.VFC<Props> = ({
  projects,
  tasks,
  handleEdit,
}) => (
  <div className={styles.wrapper}>
    <ListHeader context="project" />
    <ul className={styles.list}>
      {projects.map((project) => (
        <li className={styles.item} key={project.id}>
          <Link href={`/projects/${project.id}`}>
            <a
              id={`projects_${project.id}`}
              className={styles.link}
              onClick={() => handleEdit(project.id!)}
              onKeyPress={() => handleEdit(project.id!)}>
              <div className={styles.status}>{`${calculateProgress(
                tasks,
                project.id!,
              )}%`}</div>
              {/* <progress className={styles.status} value={calculateProgress(project.id!)} max="100"></progress> */}
              <div className={styles.name}>{project.title}</div>
              <div className={styles.task}>
                {countOpenRelatedTasks(tasks, project.id!)}
              </div>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
