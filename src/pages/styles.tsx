import styled from "styled-components";
import { Tablet, Laptop } from "../components/styles/global-styles";

export const StyledH1 = styled.h1`
  font-size: 40px;
  font-family: "Abril Fatface";
  font-weight: lighter;
  display: flex;
  justify-content: center;
  margin: 40px 0 0;

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

export const LinkCardContainer = styled.div`
  @media ${Tablet} {
    display: inline-block;
    height: 300px;
    width: 300px;
  }

  @media ${Laptop} {
    display: inline-block;
    height: 300px;
    width: 300px;
  }
`;

export const Container = styled.div`
  max-width: 1000px;
  margin: 80px auto 100px auto;
`;
