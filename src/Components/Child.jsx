import React from "react";

const Child = ({ mensaje }) => {
  return (
    <div>
      <h1>Mi edad es:</h1>
      <h2>{mensaje}</h2>
    </div>
  );
};

export default Child;
