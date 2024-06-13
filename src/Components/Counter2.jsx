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

// Debido a que los set del Hooke useState "Sobrescriben" la información, pasarle a un estado que contiene un objeto, únicamente la propiedad que deseamos modificar, haría que se sobrescriba el estado, guardando como único valor, aquello que le hayamos pasado, por tal motivo, debemos primeramente sobrescribir el objeto con el objeto inmediatamente anterior a la modificación y posterior a este, pasar el valor que deseamos modificar, ya que, al tener nuevamente el objeto y pasarle posteriormente uno de sus atributos repetidos, este conservara solo la última entrada, la cual esta modificada, y así guardara todos los atributos con sus valores anteriores y el de nuestro interés, con su nuevo valor.
