import Link from 'next/link';
import React from 'react';
import styles from './index.module.scss';

export const TaskList: React.VFC = () => (
  <div className={styles.wrapper}>
    <ul className={styles.list}>
      <li className={styles.item}>
        <Link href="/tasks/1">
          <a id="task_1" className={styles.link}>
            <div className={styles.status}>進行中</div>
            <div className={styles.name}>タスク名</div>
            <div className={styles.duedate}>
              期限:<span className={styles.date}>2020/1/1</span>
            </div>
          </a>
        </Link>
      </li>
      <li className={styles.item}>
        <Link href="/tasks/1">
          <a id="task_1" className={styles.link}>
            <div className={styles.status}>進行中</div>
            <div className={styles.name}>
              アイウエオアイウエオアイウエオアイウエオアイウエオアイウエオアイウエオアイウエオアイウエオアイウエオ
            </div>
            <div className={styles.duedate}>
              期限:<span className={styles.date}>2020/12/12</span>
            </div>
          </a>
        </Link>
      </li>
      <li className={styles.item}>
        <Link href="/tasks/1">
          <a id="task_1" className={styles.link}>
            <div className={styles.status}>進行中</div>
            <div className={styles.name}>
              アイウエオアイウエオアイウエオアイウエオアイウエオアイウエオアイウエオアイウエオアイウエオアイウエオ
            </div>
            <div className={styles.duedate}>
              期限:<span className={styles.taskDate}>2020/12/12</span>
            </div>
          </a>
        </Link>
      </li>
    </ul>
  </div>
);
