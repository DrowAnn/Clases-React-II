import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [mensajeSaliente, setMensaje] = useState("Te digo hola desde papa");
  console.log(mensajeSaliente);

  return (
    <div>
      <h1>Componente papa</h1>
      <Child mensaje={mensajeSaliente} />
    </div>
  );
};

export default Parent;
