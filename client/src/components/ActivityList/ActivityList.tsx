import React from 'react';
import { getStaringTimestamp } from '../../libs/date';
import { Activity } from '../../redux/modules/activity';
import styles from './index.module.scss';

type Props = {
  activities: Activity[];
  handleEdit: (_id: string) => void;
};
// itemがなかった時の表示追加
export const ActivityList: React.VFC<Props> = ({ activities, handleEdit }) => (
  <div className={styles.wrapper}>
    <ul className={styles.list}>
      {activities.map((activity) => (
        <li className={styles.item} key={activity.id}>
          <div className={styles.itemHeader}>
            <span className={styles.date}>
              {getStaringTimestamp(activity.updatedAt!)}
            </span>
            <div className={styles.actionWrapper}>
              <button
                type="button"
                className={styles.action}
                onClick={() => handleEdit(activity.id!)}>
                <img src="/images/icon-edit.svg" alt="編集する" />
              </button>
              <button type="button" className={styles.action}>
                <img src="/images/icon-trash.svg" alt="削除する" />
              </button>
            </div>
          </div>
          <div className={styles.commentWrapper}>
            <p className={styles.comment}>{activity.comment}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);
