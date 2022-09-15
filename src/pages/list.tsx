import React from "react";
import { graphql } from "gatsby";
import NavBar from "../components/navBar";
import BlogPage from "../components/blogPage";
import { Link } from "gatsby";
import LinkCard from "../components/linkCard";

const ListPage = ({ data }) => {
  const {
    allContentfulBlogPage: {
      nodes: [
        {
          content: { title, slug },
        },
      ],
    },
  } = data;

  const { nodes } = data.allContentfulBlogPage;

  return (
    <main>
      <NavBar />
      <h1>Blog Posts</h1>
      <ul>
        {nodes.map((item) => (
          <li>
            <LinkCard linkData={item.content} />
          </li>
        ))}
      </ul>
    </main>
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
        }
      }
    }
  }
`;
