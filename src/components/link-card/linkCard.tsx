import React from "react";
import { Link } from "gatsby";

const LinkCard = ({ linkData }) => {
  return (
    <Link to={linkData.slug}>
      {linkData.title}
      <div>
        <img src={linkData.image.url} alt="placeholder" width = "200px" />
      </div>
    </Link>
  );
};

export default LinkCard;
