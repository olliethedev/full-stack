import PropTypes from 'prop-types';

export const MetadataShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
});
