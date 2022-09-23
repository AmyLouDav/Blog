import React from "react";
import { Link } from "gatsby";
import { GlobalStyles } from "../styles/global-styles";
import { StyledLink } from "../nav-bar/styles";

const LinkCard = ({ linkData }) => {
  return (
    <GlobalStyles>
    <StyledLink to={linkData.slug}>
      {linkData.title}
      <div>
        <img src={linkData.image.url} alt="placeholder" width = "150px" />
      </div>
    </StyledLink>
    </GlobalStyles>
  );
};

export default LinkCard;
