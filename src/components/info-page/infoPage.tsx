import * as React from "react";
import { graphql } from "gatsby";
import NavBar from "../nav-bar/navBar";
import { GlobalStyles } from "../styles/global-styles";
import { StyledH1, Wrapper } from "./styles";
import { Container } from "../../pages/styles";

const InfoPage = ({ data }) => {
  const {
    contentfulInfoPage: {
      content: {
        title,
        description: { description },
      },
    },
  } = data;

  return (
    <GlobalStyles>
      <NavBar />
      <Container>
        <Wrapper>
          <StyledH1>{title}</StyledH1>
        </Wrapper>

        <p>{description}</p>
      </Container>
    </GlobalStyles>
  );
};

export default InfoPage;

export const query = graphql`
  query ($path: String) {
    contentfulInfoPage(slug: { eq: $path }) {
      id
      slug
      content {
        slug
        title
        description {
          description
        }
      }
    }
  }
`;
