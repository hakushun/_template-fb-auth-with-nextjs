import Link from 'next/link';
import React from 'react';
import styles from './index.module.scss';

// TODO 新規作成ボタン、ソート用のセレクトボックス、検索ボックスの実装
export const ProjectList: React.VFC = () => (
  <div className={styles.wrapper}>
    <ul className={styles.list}>
      <li className={styles.item}>
        <Link href="/projects/1">
          <a id="project_1" className={styles.link}>
            <div className={styles.status}>未着手</div>
            <div className={styles.name}>プロジェクト名</div>
            <div className={styles.task}>
              残タスク:<span className={styles.number}>0</span>
            </div>
          </a>
        </Link>
      </li>
      <li className={styles.item}>
        <Link href="/projects/2">
          <a id="project_2" className={styles.link}>
            <div className={styles.status}>進行中</div>
            <div className={styles.name}>
              プロジェクト名プロジェクト名プロジェクト名プロジェクト名プロジェクト名
            </div>
            <div className={styles.task}>
              残タスク:<span className={styles.number}>1000</span>
            </div>
          </a>
        </Link>
      </li>{' '}
      <li className={styles.item}>
        <Link href="/projects/3">
          <a id="project_3" className={styles.link}>
            <div className={styles.status}>完了</div>
            <div className={styles.name}>プロジェクト名</div>
            <div className={styles.task}>
              残タスク:<span className={styles.number}>0</span>
            </div>
          </a>
        </Link>
      </li>
    </ul>
  </div>
);
