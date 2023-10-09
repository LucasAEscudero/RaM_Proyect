import axios from 'axios';
import {ADD_FAV, REMOVE_FAV, FILTER, ORDER, GETALL, RESET} from './action-types';
//import axios from 'axios'; en caso de que tengamos que traer toda la info de la api (function, recursion)

//action creator (add)
export const addFav = (character) => {
    return async (dispatch) => {
        try{
            const { data } = await axios.post(`http://localhost:3001/rickandmorty/favorites`, character);

            return dispatch({
                type: REMOVE_FAV,
                payload: data
            });
        }
        catch(error){
            alert(error.message);
        }
    };
};

//action creator (remove)
export const removeFav = (id) => {
    return async (dispatch) => {
        try{
            const { data } = await axios.delete(`http://localhost:3001/rickandmorty/favorites/?id=${id}`);

            return dispatch({
                type: REMOVE_FAV,
                payload: data
            });
        }
        catch(error){
            alert(error.message);
        }
    };
};

//action creator (filter)
export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}

//action creator (order)
export const orderCards = (order) => {
    return {
        type: ORDER,
        payload: order //'A' o 'B'
    }
}

export const getAll = (pag) => {
    return async (dispatch) => {
        const { data } = await axios(`http://localhost:3001/rickandmorty/catalogue/?page=${pag}`);
        
        return dispatch({ type: GETALL, payload: data});
    }
}

export const reset = () => {
    return {
        type: RESET
    }
}