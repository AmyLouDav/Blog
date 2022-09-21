import React from "react";
import { Link } from "gatsby";

const LinkCard = ({ linkData }) => {
  return <Link to={linkData.slug}>{linkData.title}</Link>;
};

export default LinkCard;
