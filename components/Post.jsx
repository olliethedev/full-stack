import React from 'react';
import { PostShape } from '../prop-shapes/post';
import AuthorInfo from './AuthorInfo';

/**
 * Card component. This component is used to display post details.
 */
export const Post = ({ post }) => {
  return (
    <div className="border-0 rounded-md my-4 overflow-hidden bg-white shadow-md shadow-gray-200">
      <div className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 p-2 text-white">
        <h3 className="font-light">Post</h3>
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <AuthorInfo email={post?.author?.email} />
      </div>
      <div className="text-gray-600 p-2">
        <p>{post.content}</p>
        <span className="text-sm text-gray-300">
          Published: {new Date(post.createdAt).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PostShape.isRequired,
};
