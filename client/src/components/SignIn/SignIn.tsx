import Link from 'next/link';
import React from 'react';
import { AuthForm } from '../AuthForm';
import styles from './index.module.scss';

export const SignIn: React.VFC = () => (
  <>
    <AuthForm type="signin" />
    <div className={styles.root}>
      If you do not have an account, please{' '}
      <Link href="signup">
        <a>Create Account</a>
      </Link>
    </div>
  </>
);
