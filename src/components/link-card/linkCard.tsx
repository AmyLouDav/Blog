import React from "react";
import { Link } from "gatsby";
import { GlobalStyles } from "../styles/global-styles";
import { StyledLink, Wrapper, StyledImg, ImgContainer, TitleContainer  } from "./styles";

const LinkCard = ({ linkData }) => {
  return (
    <GlobalStyles>
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
    </GlobalStyles>
  );
};

export default LinkCard;
