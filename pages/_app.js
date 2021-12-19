import '../styles/globals.css';
import PropTypes from 'prop-types';

// This component is the root of our application.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};
