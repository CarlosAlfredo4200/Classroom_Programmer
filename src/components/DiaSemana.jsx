// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useDataDias } from '../hooks/useDataDias'

const DiaSemana = () => {
  const dias = useDataDias();
  return (
    <div className='div-diasSemana'>
      <h3>Days of the Week</h3>
       <div className='div-dias'>
        {dias.map((day) => (
          <button className='btn-dia' key={day}>{day}</button>
        ))}
       </div>
    </div>
  )
}

export default DiaSemana