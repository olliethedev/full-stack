import React from 'react';
import { AuthorShape } from '../prop-shapes/author';
import { UserIcon } from '@heroicons/react/solid';

const AuthorInfo = ({ author }) => {
  return (
    <div className="flex items-center space-x-1">
      <div className="flex justify-center p-1 bg-white border-0 rounded-full text-gray-500">
        <UserIcon className="w-4 h-4" />
      </div>
      <div>{author.name}</div>
    </div>
  );
};

AuthorInfo.propTypes = {
  author: AuthorShape,
};

export default AuthorInfo;
