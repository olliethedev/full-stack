import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { PostShape } from '../prop-shapes/post';
import { Post } from './Post';

/**
 * This component is used to display a list of posts. When posts list updates, it will scroll to the bottom.
 */
const PostList = ({ posts }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [posts]);

  return (
    <div className="flex flex-col">
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(PostShape).isRequired,
};
export default PostList;
