import React from "react";
import { SecondaryFont } from "./constants";

export default function Layout({ children }) {
  return (
    <div
      style={{
        width: `100%`,
        maxWidth: `100%`,
        padding: `0`,
        margin: `0 auto`,
        color: `#f25731`,
        fontFamily: `${SecondaryFont}`,
      }}
    >
      {children}
    </div>
  );
}
