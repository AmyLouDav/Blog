import React from "react";
import { graphql } from "gatsby";
import NavBar from "../components/navBar";
import BlogPage from "../components/blogPage";
import { Link } from "gatsby";

const ListPage = () => {
  return (
    <main>
      <NavBar />
      <h1>Blog Posts</h1>
      <Link to="/article1">Blog Post 1</Link>
      <br />
      <Link to="/article2">Blog Post 2</Link>
    </main>
  );
};

export default ListPage;
