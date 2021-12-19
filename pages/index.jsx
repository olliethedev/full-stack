import PropTypes from 'prop-types';

import { Layout } from '../components/Layout';
import { PostShape } from '../prop-shapes/post';
import { fetchPosts } from '../prisma/helpers/post';

import Head from '../components/Head';
import JournalInput from '../components/JournalInput';
import { useState } from 'react';
import { useCreatePostApi } from '../utils/API';
import PostList from '../components/PostList';

const metadata = {
  title: 'Home | My Journal',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper finibus libero, vel mollis felis vestibulum ut. Nulla nec tincidunt quam, in pulvinar orci. Nunc vitae maximus dolor, vel venenatis ante. Vestibulum sit amet suscipit augue.',
};

/**
 * Main page of the application. Displays navigation, a list of posts and a form to create a new post.
 */
const Journal = ({ posts }) => {
  const [postsList, setPostsList] = useState(posts);
  const onEntryCreateListener = useCreatePostApi(postsList, setPostsList);

  return (
    <Layout>
      <Head metadata={metadata} />
      <div className="flex flex-col pt-20">
        <h1 className="flex-none text-3xl font-bold underline mt-8">
          Entries
          <span className="text-2xl text-gray-700">({postsList.length})</span>
        </h1>
        <PostList posts={postsList} />
        <JournalInput onEntryCreateListener={onEntryCreateListener} />
      </div>
    </Layout>
  );
};

Journal.propTypes = {
  posts: PropTypes.arrayOf(PostShape).isRequired,
};

/**
 * Loads post data serverside.
 */
export const getServerSideProps = async () => {
  const posts = (await fetchPosts()).map((post) => ({
    ...post,
    createdAt: new Date(post.createdAt).getTime(),
  }));
  return {
    props: {
      posts,
    },
  };
};

export default Journal;
