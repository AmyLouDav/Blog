import React from "react";
import { graphql } from "gatsby";
import NavBar from "../components/navBar";
import BlogPage from "../components/blogPage";
import { Link } from "gatsby";

const ListPage = ({ data }) => {
  const {
    allContentfulBlogPage: {
      nodes: [
        {
          content: { title },
        },
      ],
    },
  } = data;

  return (
    <main>
      <NavBar />
      <h1>Blog Posts</h1>
      <p>{title}</p>
    </main>
  );
};

export default ListPage;

export const query = graphql`
  query{
    allContentfulBlogPage {
      nodes {
        content {
          title
        }
      }
    }
  }
`;
