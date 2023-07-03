
import { useData } from "../hooks/useData";
 

// eslint-disable-next-line react/prop-types
const Dia = ({ day }) => {
  const {handleDiaChange} = useData();
   

  const handleClick = () => {
    handleDiaChange(day);
    
  };

  return (
    <button className="link-aulas" onClick={handleClick}>
      {day}
    </button>

  );
};

export default Dia;
