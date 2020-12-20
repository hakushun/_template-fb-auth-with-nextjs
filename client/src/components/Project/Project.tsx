import Link from 'next/link';
import React from 'react';
import styles from './index.module.scss';

export const Project: React.VFC = () => (
  <section className={styles.root}>
    <div className={styles.heading}>
      <h2 className={styles.title}>プロジェクト名</h2>
      <button type="button" className={styles.button}>
        編集
      </button>
    </div>
    <div className={styles.project}>
      <h3 className={styles.subtitle}>プロジェクト詳細</h3>
      <div className={styles.projectWrapper}>
        <dl>
          <dt>概要</dt>
          <dd>概要文</dd>
        </dl>
        <dl>
          <dt>期限</dt>
          <dd>2020/12/12</dd>
        </dl>
        <dl>
          <dt>登録日</dt>
          <dd>2020/12/12</dd>
        </dl>
        <dl>
          <dt>最終更新日</dt>
          <dd>2020/12/12</dd>
        </dl>
      </div>
    </div>
    <div className={styles.task}>
      <div className={styles.heading}>
        <h3 className={styles.subtitle}>タスク一覧</h3>
        <button type="button" className={styles.button}>
          追加
        </button>
      </div>
      <div className={styles.taskWrapper}>
        <ul className={styles.taskList}>
          <li className={styles.taskItem}>
            <Link href="/tasks/1">
              <a id="task_1" className={styles.taskLink}>
                <div className={styles.taskStatus}>進行中</div>
                <div className={styles.taskName}>タスク名</div>
                <div className={styles.taskDuedate}>
                  期限:<span className={styles.taskDate}>2020/12/12</span>
                </div>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <div className={styles.activity}>
      <div className={styles.heading}>
        <h3 className={styles.subtitle}>アクティビティ</h3>
        <button type="button" className={styles.button}>
          追加
        </button>
      </div>
      <div className={styles.activityWrapper}>
        <ul className={styles.activityList}>
          <li className={styles.activityItem}>
            <div className={styles.activityInner}>
              <span className={styles.activityDate}>2020/12/12</span>
            </div>
            <div className={styles.activityInner}>
              <p className={styles.activityComment}>コメント欄</p>
            </div>
          </li>
          <li>
            <div className={styles.activityInner}>
              <span className={styles.activityDate}>2020/12/12</span>
            </div>
            <div className={styles.activityInner}>
              <p className={styles.activityComment}>コメント欄</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
);
