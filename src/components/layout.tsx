import React from "react";
import { PrimaryColour, SecondaryFont } from "./constants";

export default function Layout({ children }) {
  return (
    <div
      style={{
        width: `100%`,
        maxWidth: `100%`,
        padding: `0`,
        margin: `0 auto`,
        color: `${PrimaryColour}`,
        fontFamily: `${SecondaryFont}`,
      }}
    >
      {children}
    </div>
  );
}
