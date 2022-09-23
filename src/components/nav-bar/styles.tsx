import styled from "styled-components";
import { Link } from "gatsby";

export const NavBarLink = styled.div`
  margin-right: 40px;
  margin-top: 10px;
`

export const NavBarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`

export const StyledLink = styled(Link)`
  color: #f25731;
  text-decoration: none;
  font-weight: bold;
  list-style-type: none;
  &:hover,
  &:focus {
    color: pink;
  }
  &:active {
    color: violet;
  }
`
