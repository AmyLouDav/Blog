import styled from "styled-components";
import { device } from "../components/styles/global-styles";

export const StyledH1 = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap");
  font-size: 40px;
  font-family: "Abril Fatface";
  font-weight: lighter;
  display: flex;
  justify-content: center;
  margin: 40px 0 0;

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

export const LinkCardContainer = styled.div`
  @media (${device.tablet}) {
    display: inline-block;
    height: 300px;
    width: 300px;
  }

  @media (${device.laptop}) {
    display: inline-block;
    height: 300px;
    width: 300px;
  }
`;

export const Container = styled.div`
  max-width: 1000px;
  margin: 80px auto 100px auto;
`;
