import PropTypes from 'prop-types';

/**
 * Prop shape representing an author
 */
export const AuthorShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
});
