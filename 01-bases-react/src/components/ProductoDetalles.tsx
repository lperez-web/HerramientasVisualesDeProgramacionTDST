import React, { useState, useEffect } from "react";

export const ProductoDetalles = () => {
  // Estado inicial para mostrar/ocultar detalles
  const [showDetails, setShowDetails] = useState<boolean>(false);

  // useEffect que se ejecuta cada vez que cambia "showDetails"
  useEffect(() => {
    if (showDetails) {
      console.log("Detalles del producto mostrados");
    } else {
      console.log("Detalles del producto ocultos");
    }
  }, [showDetails]);

  return (
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
