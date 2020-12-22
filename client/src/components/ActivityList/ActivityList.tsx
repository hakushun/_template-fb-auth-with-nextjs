import React from 'react';
import styles from './index.module.scss';

export const ActivityList: React.VFC = () => (
  <div className={styles.wrapper}>
    <ul className={styles.list}>
      <li className={styles.item}>
        <div className={styles.itemHeader}>
          <span className={styles.date}>2020/12/12</span>
          <div className={styles.actionWrapper}>
            <button type="button" className={styles.action}>
              <img src="/images/icon-edit.svg" alt="編集する" />
            </button>
            <button type="button" className={styles.action}>
              <img src="/images/icon-trash.svg" alt="削除する" />
            </button>
          </div>
        </div>
        <div className={styles.commentWrapper}>
          <p className={styles.comment}>コメント欄</p>
        </div>
      </li>
      <li className={styles.item}>
        <div className={styles.itemHeader}>
          <span className={styles.date}>2020/12/12</span>
          <div className={styles.actionWrapper}>
            <button type="button" className={styles.action}>
              <img src="/images/icon-edit.svg" alt="編集する" />
            </button>
            <button type="button" className={styles.action}>
              <img src="/images/icon-trash.svg" alt="削除する" />
            </button>
          </div>
        </div>
        <div className={styles.commentWrapper}>
          <p className={styles.comment}>コメント欄</p>
        </div>
      </li>
      <li className={styles.item}>
        <div className={styles.itemHeader}>
          <span className={styles.date}>2020/12/12</span>
          <div className={styles.actionWrapper}>
            <button type="button" className={styles.action}>
              <img src="/images/icon-edit.svg" alt="編集する" />
            </button>
            <button type="button" className={styles.action}>
              <img src="/images/icon-trash.svg" alt="削除する" />
            </button>
          </div>
        </div>
        <div className={styles.commentWrapper}>
          <p className={styles.comment}>
            コメント欄コメント欄コメント欄コメント欄コメント欄コメント欄コメント欄コメント欄コメント欄コメント欄コメント欄コメント欄コメント欄コメント欄コメント欄コメント欄
          </p>
        </div>
      </li>
    </ul>
  </div>
);
