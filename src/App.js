import { useState } from 'react';
import data from './data.json';
import './App.css';
import TareaList from './components/TareaList';

function App() {

  const [tareas , setTareas] =  useState(data);

  const onCompletado = (id) => {
    setTareas(tareas.map((tarea) => {
      return tarea.id === Number(id) ? {...tarea, completado: !tarea.completado} : {...tarea};
    }));
  }

  const onBorrarItem = (id) => {
    console.log('Borrar ' + id);
  }

  return (
    <div className="container">
      <TareaList tareas = {tareas} onCompletado = {onCompletado} onBorrarItem = {onBorrarItem}/>
    </div>
  );
}

export default App;
