import { useState } from 'react';
import data from './data.json';
import './App.css';
import TareaList from './components/TareaList';
import TareaAgregar from './components/TareaAgregar';

function App() {

  const [tareas , setTareas] =  useState(data);

  const onCompletado = (id) => {
    setTareas(tareas.map((tarea) => {
      return tarea.id === Number(id) ? {...tarea, completado: !tarea.completado} : {...tarea};
    }));
  }

  const onBorrarItem = (id) => {
    setTareas([...tareas].filter(tarea => tarea.id !== id));
  }

  const agregandoTarea = (newTarea) =>{
    let nuevaTarea = {id : +new Date(),tarea: newTarea, completado:false};
    setTareas([...tareas, nuevaTarea]);
  }
  return (
    <div className="container">
      <TareaAgregar agregandoTarea={agregandoTarea}/>
      <TareaList tareas = {tareas} onCompletado = {onCompletado} onBorrarItem = {onBorrarItem}/>
    </div>
  );
}

export default App;
