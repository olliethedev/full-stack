import { Header } from './Header';
import PropTypes from 'prop-types';

export const Layout = ({ children }) => (
  <>
    <Header />
    <div className="layout">{children}</div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
