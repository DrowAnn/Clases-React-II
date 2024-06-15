import React, { useEffect, useState } from "react";
import "./Formulario.css";
import Mensaje from "./Mensaje";
import Coordenadas from "./Coordenadas";

const Formulario = () => {
  const [Formulario, setFormulario] = useState({
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const { name, lastName, email, phoneNumber } = Formulario;

  const tipyng = ({ target }) => {
    const { name, value } = target;

    setFormulario({ ...Formulario, [name]: value });
  };

  useEffect(() => {
    console.log("Se modifico el nombre");
  }, [name]);

  useEffect(() => {
    console.log("Se modifico el correo");
  }, [email]);

  return (
    <div className="general">
      <h1>Formulario</h1>
      <div className="formulario">
        <input
          name="name"
          type="text"
          placeholder="Robert"
          value={name}
          onChange={tipyng}
        />
        {name === "Robert" ? <Mensaje /> : <Coordenadas />}
        <input
          name="lastName"
          type="text"
          placeholder="Delgado"
          value={lastName}
          onChange={tipyng}
        />
        {lastName === "Delgado" ? <Mensaje /> : <div />}
        <input
          name="email"
          type="email"
          placeholder="prueba@parque.ti"
          value={email}
          onChange={tipyng}
        />
        {email === "prueba@parque.ti" ? <Mensaje /> : <div />}
        <input
          name="phoneNumber"
          type="number"
          placeholder="123456"
          value={phoneNumber}
          onChange={tipyng}
        />
        {phoneNumber === "123456" ? <Mensaje /> : <div />}
      </div>
    </div>
  );
};

export default Formulario;

// Las partes de un useEffect son: La funcion a ejecutar y el arreglo de dependencias de las cuales el hook estara a cargo de esperar sus cambios para ejecutar la funcion anteriormente asignada, asi mismo, este arreglo de dependencias se puede dejar vacio para que esta funcion se ejecute unicamente cuando se cargue el componente por primera vez
