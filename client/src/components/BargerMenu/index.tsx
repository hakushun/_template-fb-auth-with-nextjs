import Link from 'next/link';
import React from 'react';
import clsx from 'clsx';
import { Overlay } from '../Overlay';
import styles from './index.module.scss';

type Props = {
  isOpened: boolean;
  toggleMenu: () => void;
  logout: () => Promise<void>;
};
export const BargerMenu: React.VFC<Props> = ({
  isOpened,
  toggleMenu,
  logout,
}) => (
  <Overlay>
    <nav className={styles.nav}>
      <ul className={clsx(styles.navList, isOpened && styles.isOpened)}>
        <li className={styles.navItem}>
          <Link href="/mypage">
            <button className={styles.navLink} onClick={() => toggleMenu()}>
              My Page
            </button>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/mypage">
            <button className={styles.navLink} onClick={() => toggleMenu()}>
              Project List
            </button>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/tasks">
            <button className={styles.navLink} onClick={() => toggleMenu()}>
              Task List
            </button>
          </Link>
        </li>
        <li className={styles.navItem}>
          <button
            type="button"
            className={styles.navLink}
            onClick={() => logout()}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  </Overlay>
);
