import { NavBar } from './NavBar';
import PropTypes from 'prop-types';

/**
 * Standard scaffolding for the application. Inclueds a navbar and main content layout.
 */
export const Layout = ({ children }) => (
  <>
    <NavBar />
    <div className="max-w-screen-md mx-auto h-screen">{children}</div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
