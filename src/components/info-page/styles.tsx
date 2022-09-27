import styled from "styled-components";
import { device } from "../styles/global-styles";

export const StyledH1 = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap");
  font-size: 40px;
  font-family: "Abril Fatface";
  font-weight: lighter;
  display: flex;
  justify-content: center;
  margin-top: 30px;

  @media (${device.tablet}) {
    font-size: 50px;
  }

  @media (${device.laptop}) {
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
  color: #f25731;
  margin-top: 30px;
  a {
    color: #f25731;
    text-decoration: none;
  }
`;


