import React from 'react';
import Link from 'next/link';
import styles from './index.module.scss';
import { MenuBar } from '../MenuBar';
import { BargerMenu } from '../BargerMenu';

type Props = {
  isAuth: boolean;
  isOpened: boolean;
  toggleMenu: () => void;
  logout: () => Promise<void>;
};
export const Header: React.VFC<Props> = ({
  isAuth,
  logout,
  isOpened,
  toggleMenu,
}) => (
  <header className={styles.header}>
    <div className={styles.inner}>
      <h1 className={styles.title}>
        <Link href={isAuth ? '/mypage' : '/'}>
          <a className={styles.titleLink}>Title</a>
        </Link>
      </h1>
      <>
        {!isAuth ? (
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <Link href="signup">
                  <a className={styles.navLink}>SignUp</a>
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href="signin">
                  <a className={styles.navLink}>SignIn</a>
                </Link>
              </li>
            </ul>
          </nav>
        ) : (
          <>
            <MenuBar isOpened={isOpened} toggleMenu={toggleMenu} />
            <BargerMenu
              isOpened={isOpened}
              toggleMenu={toggleMenu}
              logout={logout}
            />
          </>
        )}
      </>
    </div>
  </header>
);
