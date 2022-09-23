import React from "react";
import { graphql } from "gatsby";
import NavBar from "../components/nav-bar/navBar";
import LinkCard from "../components/link-card/linkCard";
import { GlobalStyles } from "../components/styles/global-styles";

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
          <div>
            <LinkCard linkData={item.content} />
          </div>
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
