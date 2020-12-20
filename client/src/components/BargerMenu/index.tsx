import Link from 'next/link';
import React from 'react';
import clsx from 'clsx';
import { Overlay } from '../Overlay';
import styles from './index.module.scss';
import { navList } from '../../config/navList';

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
        {navList.map((item) => (
          <li className={styles.navItem} key={item.id}>
            <Link href={item.href}>
              <button className={styles.navLink} onClick={() => toggleMenu()}>
                {item.label}
              </button>
            </Link>
          </li>
        ))}
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
