import styled from "styled-components";
import { Tablet, Laptop, PrimaryFont, PrimaryColour } from "../constants";

export const StyledH1 = styled.h1`
  font-size: 40px;
  font-family: ${PrimaryFont};
  font-weight: lighter;
  display: flex;
  justify-content: center;
  margin-top: 30px;

  @media ${Tablet} {
    font-size: 50px;
  }

  @media ${Laptop} {
    font-size: 60px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
`;

export const StyledImg = styled.div`
  display: flex;
  justify-content: center;
`;

export const InfoPageImg = styled.div`
  margin-top: 30px;
`;

export const StyledText = styled.div`
  color: ${PrimaryColour};
  margin-top: 30px;
  a {
    color: ${PrimaryColour};
    text-decoration: none;
  }
`;
