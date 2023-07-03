// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

export const useDataAula = () => {
  const [aula, setAula] = useState("");
  const handleAulaChange = (newAula) => {
    setAula(newAula);
  };
  console.log(aula);
  return handleAulaChange;
};
