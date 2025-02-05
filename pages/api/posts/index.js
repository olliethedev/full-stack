import {
  fetchPosts,
  createPost,
  createUserIfNotExists,
} from '../../../prisma/helpers/post';
import { getSession } from 'next-auth/react';

/**
 * Internal handler for POST requests
 */
const handlePOST = async (req, res) => {
  const session = await getSession({ req });
  const { title, content } = req.body;
  let authorId = null;

  if (session) {
    const user = await createUserIfNotExists(session.user);
    authorId = user.id;
  }

  const post = await createPost({ content, title, authorId });
  res.json(post);
};

/**
 * Internal handler for GET requests
 */
const handleGET = async (res) => {
  const posts = await fetchPosts();
  res.json(posts);
};

/**
 * Handles GET and POST requests for /api/posts
 */
export default async (req, res) => {
  if (req.method === 'POST') {
    await handlePOST(req, res);
  } else if (req.method === 'GET') {
    await handleGET(res);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
};
