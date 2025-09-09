import React from "react";

export const Pets = () => {
    const animales = ["panda", "gato", "perro"]; 

    return (
        <div>
            
            <h2>Mascotas</h2>
           
          
            <ul>
                {animales.map(
                    (animales, index) => <div key={index}>
                        {animales}
                         

                    </div>
                )}
                <h2>Imprimir los elementos de una lista usando join</h2>
                {animales.join(", ")}
            </ul>
            
        </div>
    );
}
