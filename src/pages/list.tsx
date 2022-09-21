import React from "react";
import { graphql } from "gatsby";
import NavBar from "../components/nav-bar/navBar";
import BlogPage from "../components/blog-page/blogPage";
import { Link } from "gatsby";
import LinkCard from "../components/link-card/linkCard";
//import { Container } from "../components/styles/container.styled";

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
          image {
            url
          }
        }
      }
    }
  }
`;
