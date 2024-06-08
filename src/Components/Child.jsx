import React from "react";

const Child = ({ mensaje }) => {
  return (
    <div>
      <h1>Componente Hijo</h1>
      <h2>{mensaje}</h2>
    </div>
  );
};

export default Child;
