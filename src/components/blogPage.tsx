import React from "react";
import { graphql } from "gatsby";
import NavBar from "./navBar";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogPage = ({ data }) => {
  const {
    contentfulBlogPage: {
      content: {
        title,
        description: { description },
        images: { images },
      },
    },
  } = data;

  const image = getImage(images);

  return (
    <main>
      <NavBar />
      <h1>{title}</h1>
      <p>{description}</p>
      <div>
        <GatsbyImage image={image} alt="placeholder" />
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
        images {
          gatsbyImageData(width: 200)
        }
      }
    }
  }
`;
