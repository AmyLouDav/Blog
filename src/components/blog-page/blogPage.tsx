import React from "react";
import { graphql } from "gatsby";
import NavBar from "../nav-bar/navBar";
import { GlobalStyles } from "../styles/global-styles";
import DOMPurify from "dompurify";
import { Wrapper, StyledH1, StyledImg, StyledText } from "./styles";

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
      <StyledH1>{title}</StyledH1>

      <div>
        <StyledImg src={url} alt="placeholder" width="700px" />
      </div>

      <StyledText>
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(html),
          }}
        />
      </StyledText>
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
