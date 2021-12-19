import prisma from '../../lib/prisma';

/**
 * Creates a new user if none exist
 */
export const createUserIfNotExists = async ({email, name}) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (user) {
    return user;
  }
  
  return prisma.user.create({
    data: {
      email,
      name
    },
  });
};

/**
 * Finds unique post by id
 */
export const findPost = (id) => {
  return prisma.post.findUnique({
    where: { id: Number(id) },
    include: { author: true },
  });
};

/**
 * Finds all posts in the database
 */
export const fetchPosts = () => {
  return prisma.post.findMany({
    include: { author: true },
    orderBy: [
      {
        createdAt: 'asc',
      },
    ],
  });
};

/**
 * Create a new post and returns the created post
 */
export const createPost = async (data) => {
  const { title, content, authorId } = data;
  const postToCreate = { title, content, authorId, createdAt: new Date() };

  return prisma.post.create({
    data: postToCreate,
    include: {
      author: true,
    },
  });
};
