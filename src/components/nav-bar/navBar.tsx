import * as React from "react";
import { Link } from "gatsby";
import { StyledLink } from "./styles";

const NavBar = () => {
  return (
    <div>
      <StyledLink to="/home">Home</StyledLink>
      <br />
      <StyledLink to="/contact">Contact</StyledLink>
      <br />
      <StyledLink to="/list">Blog Posts</StyledLink>
    </div>
  );
};
export default NavBar;
