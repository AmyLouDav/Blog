import React from "react";
import { graphql } from "gatsby";
import NavBar from "../components/nav-bar/navBar";
import LinkCard from "../components/link-card/linkCard";
import { GlobalStyles } from "../components/styles/global-styles";
import { StyledLink } from "../components/nav-bar/styles";

const ListPage = ({ data }) => {
  const {
    allContentfulBlogPage: {
      nodes: [
        {
          content: {
            title,
            slug,
            image: { url },
          },
        },
      ],
    },
  } = data;

  const { nodes } = data.allContentfulBlogPage;

  return (
    <GlobalStyles>
      <NavBar />
      <h1>Blog Posts</h1>
      <ul>
        {nodes.map((item) => (
          <StyledLink>
            <LinkCard linkData={item.content} />
          </StyledLink>
        ))}
      </ul>
    </GlobalStyles>
  );
};

export default ListPage;

export const query = graphql`
  query {
    allContentfulBlogPage {
      nodes {
        content {
          title
          slug
          image {
            url
          }
        }
      }
    }
  }
`;
