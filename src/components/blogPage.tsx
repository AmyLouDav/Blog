import React from "react";
import { graphql } from "gatsby";
import NavBar from "./navBar";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Img from "gatsby-image";

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

  const image = getImage(image);

  return (
    <main>
      <NavBar />
      <h1>{title}</h1>
      <p>{description}</p>
      <div>
        <img src={url} alt="placeholder" />
      </div>
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
        image {
          url
        }
      }
    }
  }
`;
