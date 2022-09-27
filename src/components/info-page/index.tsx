import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../layout";
import NavBar from "../nav-bar/index";
import { StyledH1 } from "../../pages/styles";
import { Container } from "../../pages/styles";
import DOMPurify from "dompurify";
import {
  StyledImg,
  ContentContainer,
  TextContainer,
} from "../blog-page/styles";
import { InfoPageImg, StyledText, } from "./styles";

const InfoPage = ({ data }) => {
  const {
    contentfulInfoPage: {
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
      <Container>
        <StyledH1>{title}</StyledH1>
        <ContentContainer>
          <InfoPageImg>
            <StyledImg src={url} alt="placeholder" width="300px" />
          </InfoPageImg>
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
      </Container>
    </Layout>
  );
};

export default InfoPage;

export const query = graphql`
  query ($path: String) {
    contentfulInfoPage(slug: { eq: $path }) {
      id
      slug
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
