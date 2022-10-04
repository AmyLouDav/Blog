import styled from "styled-components";
import { Tablet, Laptop, PrimaryFont, SecondaryFont } from "../constants";

export const StyledH1 = styled.h1`
  font-size: 20px;
  font-family: ${PrimaryFont};
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
  font-family: ${SecondaryFont};
`;

export const TextContainer = styled.div`
  margin: 0 auto;
`;

export const ContentContainer = styled.div`
  margin: 0 auto 100px auto;
  max-width: 300px;
`;
