import React from 'react';
import styles from './index.module.scss';

export const ActivityList: React.VFC = () => (
  <div className={styles.wrapper}>
    <ul className={styles.list}>
      <li className={styles.item}>
        <div className={styles.itemHeader}>
          <span className={styles.date}>2020/12/12</span>
          <div>
            <button type="button" className={styles.button}>
              編集
            </button>
            <button type="button" className={styles.button}>
              削除
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
          <div>
            <button type="button" className={styles.button}>
              編集
            </button>
            <button type="button" className={styles.button}>
              削除
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
          <div>
            <button type="button" className={styles.button}>
              編集
            </button>
            <button type="button" className={styles.button}>
              削除
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
