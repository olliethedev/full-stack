import PropTypes from 'prop-types';

/**
 * Propr Shape representing page metadata
 */
export const MetadataShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
});
