import * as React from "react";
import { graphql } from "gatsby";
import NavBar from "../nav-bar/navBar";
import { Container } from "../styles/container.styled";

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
    <Container>
      <NavBar />
      <h1>{title}</h1>
      <p>{description}</p>
    </Container>
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