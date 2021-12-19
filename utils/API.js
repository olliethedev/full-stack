import { useCallback } from 'react';

/**
 * Invokes api call to create a new post
 * @param  {object} data Object containing the new post data
 */
export const createPost = async (data) => {
  const resp = await fetch('/api/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const post = await resp.json();
  if (!post) {
    throw new Error('Post not created');
  } else {
    return post;
  }
};

/**
 * Creates a hook that will invoke api call to create a new post
 * @param  {array} postsList Existing posts list
 * @param  {function} setPostsList Is a setter function for the posts list
 */
export const useCreatePostApi = (postsList, setPostsList) => {
  const onEntryCreateListener = useCallback(
    (data) => {
      const call = async () => {
        try {
          const post = await createPost(data);
          if (!post) {
            alert("Couldn't create post");
          } else {
            setPostsList([
              ...postsList,
              { ...post, createdAt: new Date(post.createdAt).getTime() },
            ]);
          }
        } catch (error) {
          alert("Couldn't create post");
        }
      };
      call();
    },
    [postsList, setPostsList]
  );
  return onEntryCreateListener;
};
