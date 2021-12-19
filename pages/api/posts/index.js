import { fetchPosts, createPost } from '../../../prisma/helpers/post';

const handlePOST = async (req, res) => {
  const post = await createPost(req.body);
  res.json(post);
};

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
