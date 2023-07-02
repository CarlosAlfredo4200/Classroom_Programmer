// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const ComponenteAulas = () => {
  const [aulas, setAulas] = useState([false, false, false, false, false]);

  const handleCheckboxChange = (index) => {
    const nuevasAulas = [...aulas];
    nuevasAulas[index] = !nuevasAulas[index];
    setAulas(nuevasAulas);
  };

  return (
    <div>
      <h3>Aulas</h3>
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
    </div>
  );
};

export default ComponenteAulas;
