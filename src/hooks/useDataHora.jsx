// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

export const useDataHora = () => {
    const [hora, setHora] = useState("");
 

  
    const handleHoraChange = (newHora) => {
      setHora(newHora);
    };
  
    
    console.log(hora);
    
    return handleHoraChange;
}
