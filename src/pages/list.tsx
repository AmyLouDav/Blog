import React from "react";
import "normalize.css";
import { graphql } from "gatsby";
import NavBar from "../components/nav-bar/navBar";
import LinkCard from "../components/link-card/linkCard";
import { GlobalStyles } from "../components/styles/global-styles";
import { StyledH1, Wrapper, LinkCardContainer, Container } from "./styles";

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
      {/* <Wrapper>
        <StyledH1>Blog Posts</StyledH1>
      </Wrapper> */}
      <Container>
        <StyledH1>Blog Posts</StyledH1>
        {nodes.map((item) => (
          <LinkCardContainer>
            <LinkCard linkData={item.content} />
          </LinkCardContainer>
        ))}
      </Container>
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
