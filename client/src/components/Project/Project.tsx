import Link from 'next/link';
import React from 'react';
import styles from './index.module.scss';

export const Project: React.VFC = () => (
  <section className={styles.root}>
    <div>
      <h2>プロジェクト名</h2>
      <button type="button">編集</button>
    </div>
    <div>
      <h3>プロジェクト詳細</h3>
      <div>
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
    <div>
      <div>
        <h3>タスク一覧</h3>
        <button type="button">追加</button>
      </div>
      <div>
        <ul>
          <li>
            <Link href="#">
              <a>
                <div className={styles.status}>進行中</div>
                <div className={styles.name}>タスク名</div>
                <div className={styles.duedate}>
                  期限:<span className={styles.date}>2020/12/12</span>
                </div>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <div>
        <h3>アクティビティ</h3>
        <button type="button">追加</button>
      </div>
      <div>
        <ul>
          <li>
            <div>
              <span>2020/12/12</span>
            </div>
            <div>
              <p>コメント欄</p>
            </div>
          </li>
          <li>
            <div>
              <span>2020/12/12</span>
            </div>
            <div>
              <p>コメント欄</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
);
