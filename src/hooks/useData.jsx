// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

export const useData = () => {
  const [dia, setDia] = useState("");
  const [aula, setAula] = useState("");
  const [hora, setHora] = useState("");

  const handleDiaChange = (newDia) => {
    setDia(newDia);
  };

  const handleAulaChange = (newAula) => {
    setAula(newAula);
  };

  const handleHoraChange = (newHora) => {
    setHora(newHora);
  };

  

  return { dia, aula, hora,  handleDiaChange, handleHoraChange, handleAulaChange };
};
