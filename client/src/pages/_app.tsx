import React from 'react';
import { AppProps } from 'next/app';

import '../components/stylesheets/reset.scss';
import '../components/stylesheets/global.scss';

export default function App({
  Component,
  pageProps,
}: AppProps): React.ReactElement {
  return <Component {...pageProps} />;
}
