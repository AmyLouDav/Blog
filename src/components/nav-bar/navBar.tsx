import * as React from "react";
import { Link } from "gatsby";
import { StyledLink, NavBarContainer, NavBarLink } from "./styles";

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavBarLink>
      <StyledLink to="/home">Home</StyledLink>
      </NavBarLink>
      <NavBarLink>
      <StyledLink to="/contact">Contact</StyledLink>
      </NavBarLink>
      <NavBarLink>
      <StyledLink to="/list">Blog Posts</StyledLink>
      </NavBarLink>
    </NavBarContainer>
  );
};
export default NavBar;
