import * as React from "react";
import { graphql } from "gatsby";
import NavBar from "./navBar";

const BlogPage = ({ data }) => {
  const {
    contentfulBlogPage: {
      title,
      description: { description },
    },
  } = data;

  return (
    <main>
      <NavBar />
      <h1>{title}</h1>
      <p>{description}</p>
    </main>
  );
};

export default BlogPage;

export const query = graphql`
  query ($path: String) {
    contentfulBlogPage(slug: { eq: $path }) {
      id
      slug
      title
      description {
        description
      }
    }
  }
`;
