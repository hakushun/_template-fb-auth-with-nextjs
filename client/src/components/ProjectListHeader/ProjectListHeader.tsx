import React from 'react';
import { ProjectsSortKey } from '../../redux/modules/sort';
import styles from './index.module.scss';

type Props = {
  projectsSortKey: ProjectsSortKey;
  handleSrotProjects: (_key: 'progress' | 'openTask') => void;
};
export const ProjectListHeader: React.VFC<Props> = ({
  projectsSortKey,
  handleSrotProjects,
}) => (
  <div className={styles.root}>
    <div className={styles.inner}>
      <button
        type="button"
        className={styles.status}
        onClick={() => handleSrotProjects('progress')}>
        Progress
        <img
          src={
            projectsSortKey.progress === 'up'
              ? '/images/icon-sort-ascending.svg'
              : '/images/icon-sort-descending.svg'
          }
          alt={projectsSortKey.progress === 'up' ? '昇順' : '降順'}
          width="18px"
          height="18px"
          className={styles.icon}
        />
      </button>
      <span className={styles.name}>Title</span>
      <button
        type="button"
        className={styles.label}
        onClick={() => handleSrotProjects('openTask')}>
        Open Task
        <img
          src={
            projectsSortKey.openTask === 'up'
              ? '/images/icon-sort-ascending.svg'
              : '/images/icon-sort-descending.svg'
          }
          alt={projectsSortKey.openTask === 'up' ? '昇順' : '降順'}
          width="18px"
          height="18px"
          className={styles.icon}
        />
      </button>
    </div>
  </div>
);
