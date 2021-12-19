import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import AuthorInfo from './AuthorInfo';

/**
 * Input component. This component is used to create new posts.
 */
const JournalInput = ({ onEntryCreateListener }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const formSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (title.length !== 0 && !content.length !== 0) {
        onEntryCreateListener({
          title,
          content,
        });
        setTitle('');
        setContent('');
      } else {
        alert('Please enter both title and content');
      }
    },
    [title, content]
  );
  return (
    <div className="flex flex-col items-start space-y-2 p-4 border-t-2 border-gray-300">
      <h1 className="text-2xl">New post:</h1>
      <div className="p-2 bg-gray-100 rounded-full">
        <AuthorInfo author={{ id: 0, email: '', name: 'Anonymous' }} />
      </div>
      <div className="min-w-0 w-full">
        <form className="relative flex flex-col space-y-2">
          <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
            <label htmlFor="comment" className="sr-only">
              Add your title
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="block w-full p-3 border-0 resize-none focus:ring-0 sm:text-sm"
              placeholder="Add your title..."
              defaultValue={''}
            />
          </div>
          <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
            <label htmlFor="comment" className="sr-only">
              Add your description
            </label>
            <input
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="block w-full p-3 border-0 resize-none focus:ring-0 sm:text-sm"
              placeholder="Add your description..."
              defaultValue={''}
            />
          </div>
          <div>
            <button
              onClick={formSubmit}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

JournalInput.propTypes = {
  /** Listener that is invoked after form is comleted  */
  onEntryCreateListener: PropTypes.func.isRequired,
};

export default JournalInput;
