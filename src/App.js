import { useState } from 'react';
import data from './data.json';
import './App.css';
import TareaList from './components/TareaList';
import TareaAgregar from './components/TareaAgregar';
import Swal from 'sweetalert2';

function App() {

  const [tareas , setTareas] =  useState(data);

  const onCompletado = (id) => {
    setTareas(tareas.map((tarea) => {
      return tarea.id === Number(id) ? {...tarea, completado: !tarea.completado} : {...tarea};
    }));
  }

  const onBorrarItem = (id) => {
    Swal.fire({
      title: '¿Seguro deseas eliminar?',
      text: "No podras revertir estos cambios.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#007bff',
      cancelButtonColor: '#dc3545',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        setTareas([...tareas].filter(tarea => tarea.id !== id));
        Swal.fire(
          'Listo!',
          'La tarea fue eliminada.',
          'success',
        )
      }
    })
  }

  const agregandoTarea = (newTarea) =>{
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Tarea creada!',
      showConfirmButton: false,
      timer: 1500
    })
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
      <h1>Lista de tareas</h1>
      <hr />
      <TareaAgregar agregandoTarea={agregandoTarea}/>
      <TareaList tareas = {tareas} onCompletado = {onCompletado} onBorrarItem = {onBorrarItem} onEditarItem = {onEditarItem}/>
      <footer>
        <p>&copy; Ledesma Federico Luciano</p>
      </footer>
    </div>
    
  );
}

export default App;
