// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

export const useDataDias = () => {
  const [dia, setDia] = useState("");
  

  
  const handleDiaChange = (newDia) => {
    setDia(newDia);
  };

  
  console.log(dia);
  
  return handleDiaChange;
};

