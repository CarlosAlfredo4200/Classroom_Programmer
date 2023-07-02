import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const Dia = ({day}) => {
  return (
    <Link to = "/aulas" className='link-aulas'>{day}</Link>
  )
}

export default Dia