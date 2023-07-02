// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

export const useDataDias = () => {
  // eslint-disable-next-line no-unused-vars
  const [dias, setDias] = useState([
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
  ]);
  return dias;
};
