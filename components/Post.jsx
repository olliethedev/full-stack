import React from 'react';
import { PostShape } from '../prop-shapes/post';
import AuthorInfo from './AuthorInfo';

export const Post = ({ post }) => {
  return (
    <div className="border-0 rounded-md my-8 overflow-hidden bg-white shadow-md shadow-gray-200">
      <div className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 p-2 text-white">
        <h3 className="font-light">Post</h3>
        <h1 className="text-3xl font-bold">Title!:{post.title}</h1>
        <AuthorInfo author={post.author} />
      </div>
      <div className="text-gray-600 p-2">
        <p>{post.content}</p>
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PostShape.isRequired,
};
