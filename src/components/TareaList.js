import React from 'react'
import TareaItem from './TareaItem'

export default function TareaList({tareas, onCompletado}) {
  return (
    <div>
        {
            tareas.map((tarea, index) =>(
                <TareaItem key = {`tarea-${index}`} tarea = {tarea} onCompletado = {onCompletado}/>
            ))
        }
    </div>
  )
}
