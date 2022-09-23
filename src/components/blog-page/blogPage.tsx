import React from "react";
import { graphql } from "gatsby";
import NavBar from "../nav-bar/navBar";
import { GlobalStyles } from "../styles/global-styles";

import DOMPurify from "dompurify";

const BlogPage = ({ data }) => {
  const {
    contentfulBlogPage: {
      content: {
        title,
        description: {
          childMarkdownRemark: { html },
        },
        image: { url },
      },
    },
  } = data;

  return (
    <GlobalStyles>
      <NavBar />
      <h1>{title}</h1>
      <div>
        <img src={url} alt="placeholder" width="800px" />
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(html),
        }}
      />
    </GlobalStyles>
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
        description: childContentfulElementInfoDescriptionTextNode {
          childMarkdownRemark {
            html
          }
        }
        slug
        image {
          url
        }
      }
    }
  }
`;
