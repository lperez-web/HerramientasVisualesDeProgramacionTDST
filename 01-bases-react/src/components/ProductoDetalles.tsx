import React, { useState, useEffect } from "react";
// componente funcional 
export const ProductoDetalles = () => {

  //controla si se muestra o no los detalles del producto 
  //Estado inicial para mostrar/ocultar detalles
  const [showDetails, setShowDetails] = useState(false);

  //useEffect ejecuta cada vez que cambia "showDetails"
  useEffect(() => {
    if (showDetails) {
      // si es trur muestra los detalles 
      console.log("Detalles del producto mostrados");
    } else {
      // si es false no los muestra 
      console.log("Detalles del producto ocultos");
    }
  }, [showDetails]);// este depende de showdetails 

  return (
    //es una condicion  showDetails && 
    <>
      <h3>Producto en Tienda</h3>
      
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Ocultar detalles" : "Mostrar detalles"}
      </button>
       
      {showDetails && (
        <ul>
          <li><strong>Nombre:</strong> Bicicleta </li>
          <li><strong>Precio:</strong> $600000</li>
          <li><strong>Descripción:</strong> en buen estado muy linda , recomendado 100%.</li>
        </ul>
      )}
    </>
  );
};