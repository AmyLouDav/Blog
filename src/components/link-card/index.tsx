import React from "react";
import { Link } from "gatsby";
import Layout from "../layout/layout";
import {
  StyledLink,
  Wrapper,
  StyledImg,
  ImgContainer,
  TitleContainer,
} from "./styles";

const LinkCard = ({ linkData }) => {
  return (
    <Layout>
      <Wrapper>
        <StyledLink to={linkData.slug}>
          <ImgContainer>
            <StyledImg
              src={linkData.image.url}
              alt="placeholder"
              width="150px"
            />
          </ImgContainer>
          <TitleContainer>{linkData.title}</TitleContainer>
        </StyledLink>
      </Wrapper>
    </Layout>
  );
};

export default LinkCard;
