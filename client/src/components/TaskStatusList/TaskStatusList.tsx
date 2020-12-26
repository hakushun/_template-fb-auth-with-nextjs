import React from 'react';
import styles from './index.module.scss';

type Props = {
  toggleList: () => void;
};
export const TaskStatusList: React.VFC<Props> = ({ toggleList }) => (
  <ul className={styles.statusList}>
    <li className={styles.statusItem}>
      <button
        type="button"
        className={styles.statusButton}
        onClick={() => toggleList()}>
        New
      </button>
    </li>
    <li className={styles.statusItem}>
      <button
        type="button"
        className={styles.statusButton}
        onClick={() => toggleList()}>
        WIP
      </button>
    </li>
    <li className={styles.statusItem}>
      <button
        type="button"
        className={styles.statusButton}
        onClick={() => toggleList()}>
        Reviewing
      </button>
    </li>
    <li className={styles.statusItem}>
      <button
        type="button"
        className={styles.statusButton}
        onClick={() => toggleList()}>
        Complete
      </button>
    </li>
  </ul>
);
