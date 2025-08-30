import React, { useState, useEffect } from "react";

export const ContadorClicks = () => {
  // Estado inicial del contador
  const [count, setCount] = useState<number>(0);

  // useEffect que se ejecuta cada vez que cambia "count"
  useEffect(() => {
    console.log(`Número de clics: ${count}`);
  }, [count]);

  return (
    <>
      <h3>Contador de Clics</h3>
      <p>Has hecho clic <strong>{count}</strong> veces</p>

      <button onClick={() => setCount(count + 1)}>
        Hacer clic
      </button>
    </>
  );
};

