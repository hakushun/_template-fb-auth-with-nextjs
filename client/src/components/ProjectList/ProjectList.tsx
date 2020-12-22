import Link from 'next/link';
import React from 'react';
import { ListHeader } from '../ListHeader';
import styles from './index.module.scss';

export const ProjectList: React.VFC = () => (
  <div className={styles.wrapper}>
    <ListHeader context="project" />
    <ul className={styles.list}>
      <li className={styles.item}>
        <Link href="/projects/1">
          <a id="project_1" className={styles.link}>
            <div className={styles.status}>未着手</div>
            <div className={styles.name}>プロジェクト名</div>
            <div className={styles.task}>0</div>
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
            <div className={styles.task}>1000</div>
          </a>
        </Link>
      </li>{' '}
      <li className={styles.item}>
        <Link href="/projects/3">
          <a id="project_3" className={styles.link}>
            <div className={styles.status}>完了</div>
            <div className={styles.name}>プロジェクト名</div>
            <div className={styles.task}>0</div>
          </a>
        </Link>
      </li>
    </ul>
  </div>
);
