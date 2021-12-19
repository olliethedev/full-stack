import React from 'react';
import PropTypes from 'prop-types'
import { UserIcon } from '@heroicons/react/solid';

/**
 * This component is used to display author details.
 */
const AuthorInfo = ({ email }) => {
  return (
    <div className="flex items-center space-x-1">
      <div className="flex justify-center p-1 bg-white border-0 rounded-full text-gray-500">
        <UserIcon className="w-4 h-4" />
      </div>
      <div>{email ?? 'Anonymous'}</div>
    </div>
  );
};

AuthorInfo.propTypes = {
  email: PropTypes.string,
};

export default AuthorInfo;
