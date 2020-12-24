import Link from 'next/link';
import React from 'react';
import clsx from 'clsx';
import { ActivityList } from '../ActivityList';
import { TaskList } from '../TaskList';
import styles from './index.module.scss';
import { TaskStatusList } from '../TaskStatusList';
import { TaskForm } from '../TaskForm';
import { ActivityForm } from '../ActivityForm';
import { Task as typeTask } from '../../redux/modules/task';
import { getStaringDate } from '../../libs/date';
import { toStringStatus } from '../../libs/utils';
import { Activity } from '../../redux/modules/activity';

type Props = {
  isOpened: boolean;
  task: typeTask;
  relatedTasks: typeTask[];
  relatedActivities: Activity[];
  handleEdit: (_id: string) => void;
  toggleList: () => void;
  toggleTaskModal: () => void;
  toggleActivityModal: () => void;
};
export const Task: React.VFC<Props> = ({
  isOpened,
  task,
  relatedTasks,
  relatedActivities,
  handleEdit,
  toggleList,
  toggleTaskModal,
  toggleActivityModal,
}) => (
  <>
    <TaskForm />
    <ActivityForm />
    <section className={styles.root}>
      <div className={styles.heading}>
        <h2 className={styles.title}>{task.title}</h2>
        <button className={styles.status} onClick={() => toggleList()}>
          {toStringStatus(task.status)}
        </button>
        <div
          className={clsx(
            styles.statusListWrapper,
            isOpened && styles.isOpened,
          )}>
          <TaskStatusList />
        </div>
      </div>
      <div className={styles.linkWrapper}>
        <Link href={`/projects/${task.projectId}`}>
          <a
            className={styles.link}
            onClick={() => handleEdit(task.projectId)}
            onKeyPress={() => handleEdit(task.projectId)}>
            [プロジェクト名]への導線
          </a>
        </Link>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.subheading}>
          <h3 className={styles.subtitle}>タスク詳細</h3>
          <button
            type="button"
            className={styles.action}
            onClick={() => toggleTaskModal()}>
            <img src="/images/icon-edit.svg" alt="タスクを編集する" />
          </button>
        </div>
        <div className={styles.inner}>
          <dl className={styles.item}>
            <dt className={styles.label}>概要</dt>
            <dd className={styles.description}>{task.description}</dd>
          </dl>
          <dl className={styles.item}>
            <dt className={styles.label}>期限</dt>
            <dd className={styles.description}>
              {getStaringDate(task.dueDate)}
            </dd>
          </dl>
          <dl className={styles.item}>
            <dt className={styles.label}>登録日</dt>
            <dd className={styles.description}>
              {getStaringDate(task.createdAt!)}
            </dd>
          </dl>
          <dl className={styles.item}>
            <dt className={styles.label}>最終更新日</dt>
            <dd className={styles.description}>
              {getStaringDate(task.updatedAt!)}
            </dd>
          </dl>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.subheading}>
          <h3 className={styles.subtitle}>[プロジェクト名]のタスク一覧</h3>
          <button
            type="button"
            className={styles.action}
            onClick={() => toggleTaskModal()}>
            <img src="/images/icon-circle-plus.svg" alt="タスクを追加する" />
          </button>
        </div>
        <TaskList tasks={relatedTasks} />
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
        <ActivityList activities={relatedActivities} />
      </div>
    </section>
  </>
);
