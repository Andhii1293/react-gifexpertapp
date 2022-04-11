import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = ( category ) => {
 
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    //Usando esta opcion no se ejecuta la funcion cada que cargo la pagina. solo se ejecuta una vez.
    useEffect(() => {
        getGifs(category)
            .then( imgs => {
                
                setState({
                    data: imgs,
                    loading: false
                });
                
            })
    }, [category])  


    return state;
}
