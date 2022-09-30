import React from "react";
import { PrimaryColour, SecondaryFont } from "./constants";
import { App } from "./layout-styles";

export default function Layout({ children }) {
  return <App>{children}</App>;
}
