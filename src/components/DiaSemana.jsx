// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from 'react-router-dom'
import Dia from "./Dia";

const DiaSemana = () => {
  const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

  return (
    <div className="div-container">
      <h3>Days of the Week</h3>
      <div className="div-dias">
        <div>
          {dias.map((day) => (
            <Dia key={day} className="btn-dia" day={day} />
          ))}
        </div>
        <Link to="/aulas" className="btn-continuar">Continuar</Link>
      </div>
    </div>
  );
};

export default DiaSemana;
