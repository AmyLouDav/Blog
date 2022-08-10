import * as React from "react";
import { graphql } from "gatsby";
import NavBar from "./navBar";

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
    <main>
      <NavBar />
      <h1>{title}</h1>
      <p>{description}</p>
    </main>
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
