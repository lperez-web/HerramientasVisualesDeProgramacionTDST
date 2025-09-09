// imporatmos el react los useState y useEffect desde la libreria 
import React, { useState, useEffect } from "react";

//Componente funcional llamado contadorclicks 
export const ContadorClicks = () => {
  //DEfinimos el estado count con unvalor inicial en 0
  // useState devuelve dos cosas:
  //  count  el valor actual del estado
  //  setCount función para actualizar el valor del estado
  // Estado inicial del contador
  const [count, setCount] = useState<number>(0);

  // useEffect que se ejecuta cada vez que cambia "count"
  useEffect(() => {
    console.log(`Número de clics: ${count}`);
  }, [count]);

  return (
     // al hacer clic incrementa en 1
    <>
      <h3>Contador de Clics</h3>
      <p>Has hecho clic <strong>{count}</strong> veces</p>
      
      <button onClick={() => setCount(count + 1)}>
        Hacer clic
      </button>
    </>
  );
};