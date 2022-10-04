import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout/layout";
import NavBar from "../nav-bar";
import DOMPurify from "dompurify";
import {
  ContentContainer,
  StyledH1,
  StyledImg,
  TextContainer,
  StyledText,
} from "./styles";

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
    <Layout>
      <NavBar />
      <StyledH1>{title}</StyledH1>
      <ContentContainer>
        <div>
          <StyledImg src={url} alt="placeholder" width="300px" />
        </div>
        <TextContainer>
          <StyledText>
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(html),
              }}
            />
          </StyledText>
        </TextContainer>
      </ContentContainer>
    </Layout>
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
