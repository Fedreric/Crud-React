import React from 'react'
import TareaItem from './TareaItem'

export default function TareaList({tareas, onCompletado, onBorrarItem, onEditarItem}) {
  return (
    <div>
        {
            tareas.map((tarea, index) =>(
                <TareaItem key = {`tarea-${index}`} tarea = {tarea} onCompletado = {onCompletado}
                onBorrarItem = {onBorrarItem} onEditarItem = {onEditarItem}/>
            ))
        }
    </div>
  )
}
