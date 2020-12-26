import React from 'react';
import styles from './index.module.scss';

type Props = {
  context: 'project' | 'task';
};
export const ListHeader: React.VFC<Props> = ({ context }) => (
  <div className={styles.root}>
    <div className={styles.inner}>
      <button type="button" className={styles.status}>
        {context === 'project' ? 'Progress' : 'Status'}
        <img
          src="/images/icon-sort-ascending.svg"
          alt="昇順"
          width="18px"
          height="18px"
          className={styles.icon}
        />
      </button>
      <span className={styles.name}>Title</span>
      <button type="button" className={styles.label}>
        {context === 'project' ? 'Open Task' : 'Due Date'}
        <img
          src="/images/icon-sort-descending.svg"
          alt="降順"
          width="18px"
          height="18px"
          className={styles.icon}
        />
      </button>
    </div>
  </div>
);
