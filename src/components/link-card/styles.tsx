import styled from "styled-components";
import { Link } from "gatsby";

export const Wrapper = styled.div`
  
`;
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
  margin-top: 50px;
`;

export const ImgContainer = styled.div`
  margin: 30px;
  display: flex;
  justify-content: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const StyledImg = styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover;
  padding-top: 20px;
  padding-bottom: 20px;
`;
