import React from 'react';
import Link from 'next/link';
import styles from './index.module.scss';
import { User } from '../../redux/modules/user';

type Props = {
  user: User | null;
  logout: any;
};
export const Header: React.VFC<Props> = ({ user, logout }) => (
  <header className={styles.header}>
    <div className={styles.inner}>
      <h1 className={styles.title}>
        <Link href="/">
          <a className={styles.titleLink}>Title</a>
        </Link>
      </h1>
      <nav>
        <ul className={styles.navList}>
          {!user ? (
            <>
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
            </>
          ) : (
            <>
              <li className={styles.navItem}>
                <Link href="mypage">
                  <a className={styles.navLink}>Mypage</a>
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
            </>
          )}
        </ul>
      </nav>
    </div>
  </header>
);
