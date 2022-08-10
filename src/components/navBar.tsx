import * as React from "react";
import { Link } from "gatsby";

const NavBar = () => {
  return (
    <div>
      <Link to="/home">Home</Link>
      <br />
      <Link to="/contact">Contact</Link>
      <br />
      <Link to="/blog">Blog</Link>
    </div>
  );
};
export default NavBar;
