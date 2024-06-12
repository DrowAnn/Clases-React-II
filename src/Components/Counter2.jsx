import React, { useState } from "react";
import "./Contador2.css";

const Counter2 = () => {
  const [contador, setContador] = useState({
    contador1: 10,
    contador2: 20,
    contador3: 30,
  });

  const Contadorm1 = () => {
    setContador({ ...contador, contador1: contador.contador1 - 1 });
  };
  const ContadorM1 = () => {
    setContador({ ...contador, contador1: contador.contador1 + 1 });
  };
  const Contadorm2 = () => {
    setContador({ ...contador, contador2: contador.contador2 - 2 });
  };
  const ContadorM2 = () => {
    setContador({ ...contador, contador2: contador.contador2 + 2 });
  };
  const Contadorm3 = () => {
    setContador({ ...contador, contador3: contador.contador3 - 3 });
  };
  const ContadorM3 = () => {
    setContador({ ...contador, contador3: contador.contador3 + 3 });
  };

  return (
    <div className="general">
      <h1>Mi nombre es Robert Delgado</h1>
      <div className="tablaContadores">
        <button onClick={Contadorm1}>-1</button>
        <div>
          <h1>Contador 1</h1>
          <h1>{contador.contador1}</h1>
        </div>
        <button onClick={ContadorM1}>+1</button>
        <button onClick={Contadorm2}>-2</button>
        <div>
          <h1>Contador 2</h1>
          <h1>{contador.contador2}</h1>
        </div>
        <button onClick={ContadorM2}>+2</button>
        <button onClick={Contadorm3}>-3</button>
        <div>
          <h1>Contador 3</h1>
          <h1>{contador.contador3}</h1>
        </div>
        <button onClick={ContadorM3}>+3</button>
      </div>
    </div>
  );
};

export default Counter2;
