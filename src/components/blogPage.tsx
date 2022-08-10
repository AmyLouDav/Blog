import * as React from "react";
import { graphql } from "gatsby";
import NavBar from "./navBar";

const BlogPage = ({ data }) => {
  const {
    contentfulBlogPage: {
      name,
    },
  } = data;

  return (
    <main>
      <NavBar />
      <h1>{name}</h1>
    </main>
  );
};

export default BlogPage;

export const query = graphql`
  query ($path: String) {
    contentfulBlogPage(slug: { eq: $path }) {
      id
      slug
      name
    }
  }
`;
