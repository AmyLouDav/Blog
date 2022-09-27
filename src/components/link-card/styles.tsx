import styled from "styled-components";
import { Link } from "gatsby";
import { PrimaryColour } from "../constants";

export const Wrapper = styled.div``;
export const StyledLink = styled(Link)`
  color: ${PrimaryColour};
  text-decoration: none;
  font-weight: bold;
  margin-top: 50px;
  list-style-type: none;
  &:hover,
  &:focus {
    color: pink;
  }
`;

export const ImgContainer = styled.div`
  margin: 30px;
  display: flex;
  justify-content: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledImg = styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover;
  padding: 20px 0;
`;
