import { ADD_FAV, REMOVE_FAV } from '../actions/action-types';

//initial state
const initialState = {
    myFavorites: []
}

//reduce
export default function reducer(state = initialState, action) {
    switch(action.type){
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            };
        case REMOVE_FAV:
            state.myFavorites.forEach((obj, i) => {
                if(obj.id === action.payload){
                    state.myFavorites.splice(i, 1);
                }
            }) 
            return {
                ...state,
                myFavorites: state.myFavorites
            };
        default: return {...state};
    }
}