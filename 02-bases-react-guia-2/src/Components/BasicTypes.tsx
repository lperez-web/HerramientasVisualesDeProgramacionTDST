import React, { useState } from 'react'


export const BasicTypes = () => {
 
   const name: string = "Leidy";
   const age: number = 18;
   //const isActive: boolean = true;
   const [isActive, setisActive] = useState(true);

const names=[
    "vane",
    "lady",
    "ana",
  ]
  // llave: name valor: camila
  // estructra  tipo variable evaluadada

  const user ={
    name:"Camila",
    email:"camila@gmail.com",
    age:"15",
    role:"adminsitrador",
    maritalStatus:"single",
    isActive:true


  }
  return (
    <>
      <div>BasicTypes</div>
     <h2>Constantes</h2>
     {/* ul>((li>(b+span))*3) */}
     <ul>
        <li><b>name:</b><span>{name}</span></li>
        <li><b>age:</b><span>{age}</span></li>
        <li><b>isActive</b><span>{isActive?
        "Usuario Activo":
        
        "Usuario Inactivo"}
        </span>
        </li>
     </ul>
     <button onClick={()=>setisActive(!isActive)}>
      {isActive? "Desactivar":"Activar"}
      </button>
        {names[0]}

       
       {names[0]}
            <ul>
                {names.map(
                    (name, index) => <li key={index}>
                        {name}
                    </li>
                )}
            </ul>
          <h2>Objetos literales</h2>
          {user.name} <br />

    </>
  
  )
}

