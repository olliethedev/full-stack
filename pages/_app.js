import { SessionProvider } from 'next-auth/react';

import '../styles/globals.css';
import PropTypes from 'prop-types';

// This component is the root of our application.
export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};
