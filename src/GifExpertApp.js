import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

//rafc para crear rapidamente un componente react
export const GifExpertApp = () => {

    //const categories = ['OnePunch','Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One Punch']);

    /*
    const handleAdd = () => {
        //De esta forma añado item al arreglo..
        setCategories([...categories, 'HunterxHunter']);

        //Se usaria de la siguiente forma si quisiera que el item nuevo estuviera primero
        //setCategories(['HunterxHunter',...categories]);

        //Otra opcion
        //setCategories(cats => [...cats, 'HunterxHunter']);
    }
    */

    return (
        <>
            <h2>GifExpertApp</h2>
            
            {/* Aqui le esta enviendo la funcion setCategorias a otro componente */}
            <AddCategory setCategories={setCategories} />
            
            <hr />
            
            {/*
            //Forma comun de agregar boton
            <button onClick={handleAdd}>Agregar</button> 
            */}

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                        // <li key={category}>{category}</li>
                    ))
                }
            </ol>

        </>
    )
}
