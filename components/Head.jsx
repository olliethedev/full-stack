import React from 'react';
import PropTypes from 'prop-types';
import { default as NextHead } from 'next/head';

const Head = ({ title, description }) => {
  return (
    <NextHead>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <link rel="icon" href="/static/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap"
        rel="stylesheet"
      />
    </NextHead>
  );
};
Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
Head.defaultProps = {
  title: 'My Journal',
};
export default Head;
