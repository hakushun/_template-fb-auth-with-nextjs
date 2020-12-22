import Link from 'next/link';
import React from 'react';
import { ActivityList } from '../ActivityList';
import { TaskList } from '../TaskList';
import styles from './index.module.scss';

export const Task: React.VFC = () => (
  <section className={styles.root}>
    <div className={styles.heading}>
      <h2 className={styles.title}>タスク名</h2>
      <span className={styles.status}>進行中</span>
    </div>
    <div className={styles.linkWrapper}>
      <Link href="/projects/1">
        <a className={styles.link}>[プロジェクト名]への導線</a>
      </Link>
    </div>
    <div className={styles.wrapper}>
      <div className={styles.subheading}>
        <h3 className={styles.subtitle}>タスク詳細</h3>
        <button type="button" className={styles.action}>
          <img src="/images/icon-edit.svg" alt="タスクを編集する" />
        </button>
      </div>
      <div className={styles.inner}>
        <dl className={styles.item}>
          <dt className={styles.label}>概要</dt>
          <dd className={styles.description}>
            アイウエオアイウエオアイウエオアイウエオアイウエオアイウエオアイウエオアイウエオアイウエオアイウエオ
          </dd>
        </dl>
        <dl className={styles.item}>
          <dt className={styles.label}>期限</dt>
          <dd className={styles.description}>2020/12/12</dd>
        </dl>
        <dl className={styles.item}>
          <dt className={styles.label}>登録日</dt>
          <dd className={styles.description}>2020/12/12</dd>
        </dl>
        <dl className={styles.item}>
          <dt className={styles.label}>最終更新日</dt>
          <dd className={styles.description}>2020/12/12</dd>
        </dl>
      </div>
    </div>
    <div className={styles.wrapper}>
      <div className={styles.subheading}>
        <h3 className={styles.subtitle}>[プロジェクト名]のタスク一覧</h3>
        <button type="button" className={styles.action}>
          <img src="/images/icon-circle-plus.svg" alt="タスクを追加する" />
        </button>
      </div>
      <TaskList />
    </div>
    <div className={styles.wrapper}>
      <div className={styles.subheading}>
        <h3 className={styles.subtitle}>アクティビティ</h3>
        <button type="button" className={styles.action}>
          <img
            src="/images/icon-circle-plus.svg"
            alt="アクティビティを追加する"
          />
        </button>
      </div>
      <ActivityList />
    </div>
  </section>
);
