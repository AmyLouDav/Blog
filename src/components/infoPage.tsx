import * as React from "react";
import { graphql } from "gatsby";
import NavBar from "./navBar";

const InfoPage = ({ data }) => {
  const {
    contentfulInfoPage: {
      name,
    },
  } = data;

  return (
    <main>
      <NavBar />
      <h1>{name}</h1>
    </main>
  );
};

export default InfoPage;

export const query = graphql`
  query ($path: String) {
    contentfulInfoPage(slug: { eq: $path }) {
      id
      slug
      name
    }
  }
`;
