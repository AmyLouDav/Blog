import * as React from "react";
import { Link } from "gatsby";

const NavBar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/contact">Contact</Link>
      <br />
      <Link to="/list">Blog Posts</Link>
    </div>
  );
};
export default NavBar;
