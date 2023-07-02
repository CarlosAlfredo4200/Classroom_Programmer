// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const ComponenteAulas = () => {
  const [aulas, setAulas] = useState([false, false, false, false, false]);

  const [horario, setHorario] = useState("9 am");

  const handleCheckboxChange = (index) => {
    const nuevasAulas = [...aulas];
    nuevasAulas[index] = !nuevasAulas[index];
    setAulas(nuevasAulas);
  };

  const handleHorarioChange = (event) => {
    setHorario(event.target.value);
  };

  return (
    <div className="div-container">
      <h3>Classrooms available</h3>
      {aulas.map((aula, index) => (
        <div key={index}>
          <input
            type="checkbox"
            checked={aula}
            onChange={() => handleCheckboxChange(index)}
            />
          <label>{`Aula ${index + 1}`}</label>
        </div>
      ))}

      <h3>Schedules available</h3>
      <select value={horario} onChange={handleHorarioChange}>
        <option value="9 am">9 am</option>
        <option value="10 am">10 am</option>
        <option value="11 am">11 am</option>
      </select>
    </div>
  );
};

export default ComponenteAulas;
