import React, { useEffect, useState } from "react";

const Coordenadas = () => {
  const [cordenada, setCordenada] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const onMouseMove = ({ x, y }) => {
      setCordenada({ x, y });

      console.log(cordenada);
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [cordenada]);

  return (
    <div>
      <h2>{JSON.stringify(cordenada)}</h2>
    </div>
  );
};

export default Coordenadas;
