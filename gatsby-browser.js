import React from 'react';
import Layout from '../Blog/src/components/layout';

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);
