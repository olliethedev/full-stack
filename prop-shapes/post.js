import PropTypes from 'prop-types';
import { AuthorShape } from './author';

/**
 * Prop Shape representing a Post
 */
export const PostShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  authorId: PropTypes.number,
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  author: AuthorShape,
  createdAt: PropTypes.number,
});
