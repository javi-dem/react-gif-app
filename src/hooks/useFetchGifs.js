import {useState, useEffect} from 'react'
import { getGifs } from '../helpers/getGifs';

// hooks no son mas que funciones, que se ejecutan en el componente
export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(()=>{

        getGifs(category)
            .then(images =>{

                setTimeout(()=>{
                    setState({
                        data: images,
                        loading: false
                    });
                }, 2000);
            })

    }, [category]) // Arreglo vacio para que se ejecute solo una vez

    return state; // {data: [], loading: true}
}

