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
        未着手
      </button>
    </li>
    <li className={styles.statusItem}>
      <button
        type="button"
        className={styles.statusButton}
        onClick={() => toggleList()}>
        進行中
      </button>
    </li>
    <li className={styles.statusItem}>
      <button
        type="button"
        className={styles.statusButton}
        onClick={() => toggleList()}>
        FB待ち
      </button>
    </li>
    <li className={styles.statusItem}>
      <button
        type="button"
        className={styles.statusButton}
        onClick={() => toggleList()}>
        完了
      </button>
    </li>
  </ul>
);
