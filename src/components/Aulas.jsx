// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

import { useData } from "../hooks/useData";

const CheckboxGroup = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const { handleAulaChange, handleHoraChange } = useData();

  const handleCheckboxChange = (value) => {
    setSelectedValue(value === selectedValue ? "" : value);
    handleAulaChange(value === selectedValue ? "" : value);
  };

  const handleHorarioChange = (event) => {
    const newHora = event.target.value;
    handleHoraChange(newHora);
  };

  return (
    <div className="div-checkbox">
      <h3 className="div-checkbox-title">Select a checkbox</h3>
      {[1, 2, 3, 4, 5].map((value) => (
        <div key={value}>
          <input
            type="checkbox"
            checked={selectedValue === value}
            onChange={() => handleCheckboxChange(value)}
          />
          <label>{`Aula Nº: ${value}`}</label>
        </div>
      ))}
      <p>Selected value: {selectedValue}</p>
      <div className="div-select">
        <h3 className="div-checkbox-title">Select a schedule</h3>
        <select className="caja" value="" onChange={handleHorarioChange}>
          <option disabled value="">
            Select a schedule
          </option>
          <option value="9 am">9 am</option>
          <option value="10 am">10 am</option>
          <option value="11 am">11 am</option>
        </select>
      </div>
      <div></div>
    </div>
  );
};

export default CheckboxGroup;
