import { Link } from "react-router-dom";
import { useDataDias } from "../hooks/useDataDias";
import Dia from "./Dia";

const DiaSemana = () => {
  const dias = useDataDias();
  return (
    <div className="div-container">
      <h3>Days of the Week</h3>
      <div className="div-dias">
        {dias.map((day) => (
         <Link to="aulas" key={day}>
         <Dia className='btn-dia' day ={day}/>
       </Link>
        ))}
      </div>
    </div>
  );
};

export default DiaSemana;
