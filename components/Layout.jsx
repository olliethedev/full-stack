import { NavBar } from './NavBar';
import PropTypes from 'prop-types';

export const Layout = ({ children }) => (
  <>
    <NavBar />
    <div className="max-w-screen-md mx-auto">{children}</div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
