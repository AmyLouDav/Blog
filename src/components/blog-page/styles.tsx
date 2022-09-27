import styled from "styled-components";
import { Tablet, Laptop } from "../styles/global-styles";

export const StyledH1 = styled.h1`
  font-size: 20px;
  font-family: "Abril Fatface";
  font-weight: lighter;
  display: flex;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 30px;

  @media (${Tablet}) {
    font-size: 30px;
  }

  @media (${Laptop}) {
    font-size: 50px;
  }
`;

export const Wrapper = styled.img`
  width: 100%;
`;

export const StyledImg = styled.img`
  display: flex;
  justify-content: center;
`;

export const StyledText = styled.div`
  color: black;
  font-size: 12px;
`;

export const TextContainer = styled.div`
  margin: 0 auto;
`;

export const ContentContainer = styled.div`
  margin: 0 auto 100px auto;
  max-width: 300px;
`;
