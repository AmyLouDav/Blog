import React from "react";
import { graphql } from "gatsby";
import NavBar from "./navBar";

const BlogPage = ({ data }) => {
  const {
    contentfulBlogPage: {
      content: {
        title,
        description: { description },
      },
    },
  } = data;
//   console.log("***", data);
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
      slug
      id
      content {
        title
        description {
          description
          id
        }
        slug
      }
    }
  }
`;
