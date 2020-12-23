import React from 'react';
import { ActivityForm } from '../ActivityForm';
import { ActivityList } from '../ActivityList';
import { ProjectForm } from '../ProjectForm';
import { TaskForm } from '../TaskForm';
import { TaskList } from '../TaskList';
import styles from './index.module.scss';

type Props = {
  toggleProjectModal: () => void;
  toggleTaskModal: () => void;
  toggleActivityModal: () => void;
};
export const Project: React.VFC<Props> = ({
  toggleProjectModal,
  toggleTaskModal,
  toggleActivityModal,
}) => (
  <>
    <ProjectForm />
    <TaskForm />
    <ActivityForm />
    <section className={styles.root}>
      <div className={styles.heading}>
        <h2 className={styles.title}>プロジェクト名</h2>
        <span className={styles.status}>30%</span>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.subheading}>
          <h3 className={styles.subtitle}>プロジェクト詳細</h3>
          <button
            type="button"
            className={styles.action}
            onClick={() => toggleProjectModal()}>
            <img src="/images/icon-edit.svg" alt="プロジェクトを編集する" />
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
          <button
            type="button"
            className={styles.action}
            onClick={() => toggleTaskModal()}>
            <img src="/images/icon-circle-plus.svg" alt="タスクを追加する" />
          </button>
        </div>
        <TaskList />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.subheading}>
          <h3 className={styles.subtitle}>アクティビティ</h3>
          <button
            type="button"
            className={styles.action}
            onClick={() => toggleActivityModal()}>
            <img
              src="/images/icon-circle-plus.svg"
              alt="アクティビティを追加する"
            />
          </button>
        </div>
        <ActivityList />
      </div>
    </section>
  </>
);
