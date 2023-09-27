import axios from 'axios';
import {ADD_FAV, REMOVE_FAV, FILTER, ORDER, GETALL, RESET} from './action-types';
//import axios from 'axios'; en caso de que tengamos que traer toda la info de la api (function, recursion)

//action creator (add)
export const addFav = (character) => {
    return {
        type: ADD_FAV,
        payload: character
    }
}

//action creator (remove)
export const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id
    }
}

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
    return (dispatch) => {
        axios(`https://rickandmortyapi.com/api/character?page=${pag}`)
        .then(({data}) => {
            return dispatch({ type: GETALL, payload: data.results});
        })  
    }
}

export const reset = () => {
    return {
        type: RESET
    }
}