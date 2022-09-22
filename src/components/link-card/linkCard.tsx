import React from "react";
import { Link } from "gatsby";
import { GlobalStyles } from "../styles/global-styles";

const LinkCard = ({ linkData }) => {
  return (
    <GlobalStyles>
    <Link to={linkData.slug}>
      {linkData.title}
      <div>
        <img src={linkData.image.url} alt="placeholder" width = "200px" />
      </div>
    </Link>
    </GlobalStyles>
  );
};

export default LinkCard;
