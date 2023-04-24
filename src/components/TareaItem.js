import React from 'react'

export default function TareaItem({tarea, onCompletado,onBorrarItem,onEditarItem}) {
    const getStyle = () =>{
        return {
            textDecoration:tarea.completado? 'line-through' : 'none',
            margin: '20px',
            border: '1px solid #ffffff',
            backgroundColor: '#ccf7e3'
        }

    }
  return (
    <div style={getStyle()}>
        <input type='checkbox' checked = {tarea.completado}
        onChange={ () => onCompletado(tarea.id)}/>
        { tarea.tarea}
        <button className='btn-eliminar' onClick = {() => onBorrarItem(tarea.id)}>X</button>
        <button className='btn-eliminar' onClick = {() => onEditarItem(tarea.id)}>E</button>
    </div>
  )
}
