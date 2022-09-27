import React from "react";

export default function Layout({ children }) {
  return (
    <div
      style={{
        // @import url("https://fonts.googleapis.com/css2?family=Signika:wght@300&display=swap")
        width: `100%`,
        maxWidth: `100%`,
        padding: `0`,
        margin: `0 auto`,
        color: `#f25731`,
        fontFamily: `Signika`,
      }}
    >
      {children}
    </div>
  );
}
