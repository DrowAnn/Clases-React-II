import React, { useState } from "react";

const Counter = () => {
  const [mensaje, setMensaje] = useState(25);

  const Disminuir = () => {
    setMensaje(mensaje - 1);
  };
  const Reestablecer = () => {
    setMensaje(25);
  };
  const Aumentar = () => {
    setMensaje(mensaje + 1);
  };

  return (
    <div>
      <h1>Mi nombre es Robert Delgado</h1>
      <h1>Tengo {mensaje} Años</h1>
      <div>
        <button onClick={Disminuir}>-1</button>
        <button onClick={Reestablecer}>Reestablecer</button>
        <button onClick={Aumentar}>+1</button>
      </div>
    </div>
  );
};

export default Counter;
