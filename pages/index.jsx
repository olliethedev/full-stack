import PropTypes from 'prop-types';

import { Layout } from '../components/Layout';
import { PostShape } from '../prop-shapes/post';
import { fetchPosts } from '../prisma/helpers/post';

import Head from '../components/Head';
import { Post } from '../components/Post';

const metadata = {
  title: 'Home | My Journal',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper finibus libero, vel mollis felis vestibulum ut. Nulla nec tincidunt quam, in pulvinar orci. Nunc vitae maximus dolor, vel venenatis ante. Vestibulum sit amet suscipit augue.',
};

const Journal = ({ posts }) => {
  return (
    <Layout>
      <Head metadata={metadata} />
      <h1 className="text-3xl font-bold underline mt-8">
        Entries<span className="text-2xl text-gray-700">({posts.length})</span>
      </h1>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </Layout>
  );
};

Journal.propTypes = {
  posts: PropTypes.arrayOf(PostShape).isRequired,
};

export const getServerSideProps = async () => {
  return {
    props: {
      posts: await fetchPosts(),
    },
  };
};

export default Journal;
