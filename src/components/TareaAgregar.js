import React, { useState } from 'react'

export default function TareaAgregar({agregandoTarea}) {
    const [valorIngresado, setValorIngresado] = useState('');

    const cambiarValor = (e) =>{
        setValorIngresado(e.currentTarget.value);
    }

    const agregarTarea = (e) =>{
        e.preventDefault();
        if(valorIngresado.trim() !== ''){
            agregandoTarea(valorIngresado);
            setValorIngresado('');
        }
    }
  return (
    <div style = {{margin:20}}>
        <form onSubmit = {agregarTarea}>
            <input type='text' value ={valorIngresado} onChange = {cambiarValor} placeholder='ingresa una tarea' className='input-border'/>
            <button className='btn-agregar'>Agregar</button>
        </form>
    </div>
  )
}
