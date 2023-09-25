import {ADD_FAV, REMOVE_FAV} from './action-types';
//import axios from 'axios'; en caso de que tengamos que traer toda la info de la api

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