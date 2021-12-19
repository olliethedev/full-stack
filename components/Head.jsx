import React from 'react';
import { default as NextHead } from 'next/head';
import { MetadataShape } from '../prop-shapes/metadata';

/**
 * Html head component. This component is used to set the title, description and other metadata for the page.
 */
const Head = ({ metadata }) => {
  return (
    <NextHead>
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
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <link rel="icon" href="/static/favicon.ico" />
    </NextHead>
  );
};

Head.propTypes = {
  metadata: MetadataShape.isRequired,
};
export default Head;
