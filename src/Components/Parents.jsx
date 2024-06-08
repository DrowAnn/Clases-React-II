import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [mensajeSaliente, setMensaje] = useState(25);
  console.log(mensajeSaliente);

  const Actualizar = () => {
    setMensaje(mensajeSaliente + 1);
  };

  return (
    <div>
      <h1>Mi nombre es Robert Delgado</h1>
      <Child mensaje={mensajeSaliente} />
      <button onClick={Actualizar}>Actualizar</button>
    </div>
  );
};

export default Parent;
