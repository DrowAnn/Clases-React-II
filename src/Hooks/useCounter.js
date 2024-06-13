import { useState } from "react";

const useCounter = (valor = 0) => {
  const [counter, setCounter] = useState(valor);
  const [displayColor, setDisplayColor] = useState("Withe");
  const arregloColores = [
    "Withe",
    "Red",
    "Blue",
    "Green",
    "Gray",
    "Aqua",
    "Aquamarine",
    "Blueviolet",
    "Brown",
    "Chocolate",
    "Crimson",
    "Cyan",
    "Fuschsia",
  ];

  const Add = (addV) => {
    if (addV !== "") {
      setCounter(counter + parseInt(addV));
    }
    setDisplayColor(
      arregloColores[Math.floor(Math.random() * (arregloColores.length - 1))]
    );
  };
  const Substract = (substractV) => {
    if (substractV !== "") {
      setCounter(counter - parseInt(substractV));
    }
    setDisplayColor(
      arregloColores[Math.floor(Math.random() * (arregloColores.length - 1))]
    );
  };
  const Reset = () => {
    setCounter(0);
    setDisplayColor("White");
  };

  return { counter, Add, Substract, Reset, displayColor };
};

export default useCounter;
