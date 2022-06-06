import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = ()=>{

    // No se puede mutar arreglo original
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    // Añadir elemento al arreglo
    // const handleAdd = ()=>{
    //     // Recibe estado anterior / Retorna nuevo estado
    //     setCategories( (categ)=>([...categ, 'Pokemon']));
    // };

    return (
        <div className='animate__animated animate__fadeIn'>
            <h2>GifExpertApp</h2>
            {/* Comunicacion entre componentes */}
            <AddCategory setCategories={setCategories} />
            <hr/> 

            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {
                    categories.map( (category)=>(
                        // Key: Referencia a elemento
                        // No puede ser indice
                        // Debe ser unico
                        <GifGrid
                            key={category} 
                            category={category} 
                        />
                    ))
                }
            </ol>
        </div>
    );
};

export default GifExpertApp;