import React from 'react'

export const BasicTypes = () => {
  const name: string = "vane";
  const age: number = 18;
   let isActive: boolean = true;

  return (
    <>
      <h3>Basic Types</h3>
      <ul>
        <li>Nombre: {name}</li>
        <li>Edad: {age}</li>
      </ul>
      <li>Nombre: {age}</li>
        <li>Edad: {isActive}</li>
    </>
)

}


