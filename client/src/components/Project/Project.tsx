import React from 'react';
import { ActivityList } from '../ActivityList';
import { TaskList } from '../TaskList';
import styles from './index.module.scss';

export const Project: React.VFC = () => (
  <section className={styles.root}>
    <div className={styles.heading}>
      <h2 className={styles.title}>プロジェクト名</h2>
    </div>
    <div className={styles.wrapper}>
      <div className={styles.subheading}>
        <h3 className={styles.subtitle}>プロジェクト詳細</h3>
        <button type="button" className={styles.button}>
          編集
        </button>
      </div>
      <div className={styles.inner}>
        <dl className={styles.projectItem}>
          <dt className={styles.projectLabel}>概要</dt>
          <dd className={styles.projectDescription}>
            アイウエオアイウエオアイウエオアイウエオアイウエオアイウエオアイウエオアイウエオアイウエオアイウエオ
          </dd>
        </dl>
        <dl className={styles.projectItem}>
          <dt className={styles.projectLabel}>期限</dt>
          <dd className={styles.projectDescription}>2020/12/12</dd>
        </dl>
        <dl className={styles.projectItem}>
          <dt className={styles.projectLabel}>登録日</dt>
          <dd className={styles.projectDescription}>2020/12/12</dd>
        </dl>
        <dl className={styles.projectItem}>
          <dt className={styles.projectLabel}>最終更新日</dt>
          <dd className={styles.projectDescription}>2020/12/12</dd>
        </dl>
      </div>
    </div>
    <div className={styles.wrapper}>
      <div className={styles.subheading}>
        <h3 className={styles.subtitle}>タスク一覧</h3>
        <button type="button" className={styles.button}>
          追加
        </button>
      </div>
      <TaskList />
    </div>
    <div className={styles.wrapper}>
      <div className={styles.subheading}>
        <h3 className={styles.subtitle}>アクティビティ</h3>
        <button type="button" className={styles.button}>
          追加
        </button>
      </div>
      <ActivityList />
    </div>
  </section>
);
