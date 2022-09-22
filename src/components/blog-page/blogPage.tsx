import React from "react";
import { graphql } from "gatsby";
import NavBar from "../nav-bar/navBar";
import { Container } from "../styles/container.styled";

const BlogPage = ({ data }) => {
  const {
    contentfulBlogPage: {
      content: {
        title,
        description: { description },
        image: { url },
      },
    },
  } = data;

  return (
    <Container>
      <NavBar />
      <h1>{title}</h1>
      <div>
        <img src={url} alt="placeholder" />
      </div>
      <p>{description}</p>
    </Container>
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
        image {
          url
        }
      }
    }
  }
`;
