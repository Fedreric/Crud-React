import { useState } from 'react';
import data from './data.json';
import './App.css';
import TareaList from './components/TareaList';

function App() {

  const [tareas , setTareas] =  useState(data);
  const onCompletado = (id) => {
    console.log('Tarea ' + id);
    setTareas(tareas.map((tarea) => {
      return tarea.id === Number(id) ? {...tarea, completado: !tarea.completado} : {...tarea};
    }));
  };
  return (
    <div className="container">
      <TareaList tareas = {tareas} onCompletado = {onCompletado}/>
    </div>
  );
}

export default App;
