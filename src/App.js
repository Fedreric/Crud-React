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

  const onEditarItem = (id) =>{
    let tareaEdit = tareas.find(tarea => tarea.id === id);
    let newTarea = prompt("Editar tarea: ");
    tareaEdit.tarea = newTarea;
    setTareas([...tareas]);
  }
  return (
    <div className="container">
      <TareaAgregar agregandoTarea={agregandoTarea}/>
      <TareaList tareas = {tareas} onCompletado = {onCompletado} onBorrarItem = {onBorrarItem} onEditarItem = {onEditarItem}/>
    </div>
  );
}

export default App;
