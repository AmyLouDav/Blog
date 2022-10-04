import styled from "styled-components";
import { Link } from "gatsby";
import { PrimaryColour, SecondaryFont } from "../constants";

export const NavBarLink = styled.div`
  margin-right: 40px;
  margin-top: 10px;
`;

export const NavBarContainer = styled.div`
  position: fixed;
  top: 0;
  background-color: white;
  border-bottom: 1px solid ${PrimaryColour};
  padding: 10px;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const StyledLink = styled(Link)`
  color: ${PrimaryColour};
  text-decoration: none;
  font-size: 13px;
  font-weight: bold;
  list-style-type: none;
  &:hover,
  &:focus {
    color: pink;
  }
  &:active {
    color: violet;
  }
`;
