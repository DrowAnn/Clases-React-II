import React, { useState } from "react";
import "./Contador.css";
import useCounter from "../Hooks/useCounter";

const Counter = () => {
  const [tipyng, setTyping] = useState({ addV: "", substractV: "" });

  const typing = ({ target }) => {
    const { name, value } = target;
    setTyping({ ...tipyng, [name]: value });
  };

  const { addV, substractV } = tipyng;

  const { counter, Add, Substract, Reset, displayColor } = useCounter();

  return (
    <div className="general">
      <h1>Mi nombre es Robert Delgado</h1>
      <h1>Contador Personalizado</h1>
      <h2 style={{ color: displayColor }}>{counter}</h2>
      <div className="tablaContadores">
        <input
          type="number"
          placeholder="- #"
          onChange={typing}
          value={substractV}
          name="substractV"
        />
        <button
          onClick={() => {
            Substract(substractV);
          }}
        >
          Substract
        </button>
        <button onClick={Reset}>Reset</button>
        <button
          onClick={() => {
            Add(addV);
          }}
        >
          Add
        </button>
        <input
          type="number"
          placeholder="+ #"
          onChange={typing}
          value={addV}
          name="addV"
        />
      </div>
    </div>
  );
};

export default Counter;
