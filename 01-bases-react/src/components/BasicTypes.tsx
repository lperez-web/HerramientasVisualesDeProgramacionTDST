import React, { useState } from 'react';

export const BasicTypes = () => {
  //let name: string = "vane"; // variable normal
   const [name, setName] = useState<string>("vane");
  const [age, setAge] = useState<number>(18);
  const [isActive,setIsActive] = useState<boolean>(true);
  //let isActive: boolean = true;

  
  return (
    <>
      <h3>Basic Types</h3>
      {isActive ? (
        <ul>
          <li>Nombre: {name}</li>
          <li>Edad: {age}</li>
        </ul>
      ) : (
        <p>Usuario inactivo</p>
      )}

      <h2>Variable normal</h2>
      <button onClick={() => {
          setName  ("pereez");
          console.log("Nuevo nombre:", name);
        }}
      >
        Modificar nombre
      </button>

      <h2>Variable de estado age</h2>
      <button
        onClick={() => {
          setAge(age + 1);
          console.log("Nueva edad:", age + 1);
        }}
      >
        Modificar edad
      </button>

      <h2>Estado de actividad</h2>
      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? 'Desactivar usuario' : 'Activar usuario'}
      </button>
    </>
    
  );
};




