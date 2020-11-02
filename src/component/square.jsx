import React from "react";
const squareStyle = {
  width: "100%",
  height: "100%",
};
export const Square = ({ children }) => {
  return (
    <div
      style={{
        ...squareStyle,
        background: "#eee",
      }}
    >
      {children}
    </div>
  );
};
