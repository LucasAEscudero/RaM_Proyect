import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, GETALL, RESET} from '../actions/action-types';

//initial state
const initialState = {
    myFavorites: [],
    allFavorites: [],
    allCharacters: []
}

//reduce
export default function reducer(state = initialState, action) {
    switch(action.type){
        //add case (fav)
        case ADD_FAV:
            return {
                ...state,
                myFavorites: action.payload,
                allFavorites: action.payload
            };
        
        //remover case (fav)
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: action.payload,
                allFavorites: action.payload
            };

        //filter case
        case FILTER: 
            return {
                ...state,
                myFavorites: [...state.myFavorites].filter((character) => {
                    return character.gender === action.payload;
                })
            }
        
        //order case
        case ORDER:
            return {
                ...state,
                myFavorites: [...state.myFavorites].sort((a, b) => { //myFavorites para que actuen en conjunto
                    if(action.payload === 'D') return a.id - b.id;
                    else return b.id - a.id;
                })
            }
        
         case GETALL: 
             return {
                 ...state,
                 allCharacters: action.payload
             }

        case RESET:
            return {
                ...state,
                myFavorites: [...state.allFavorites]
            }
            
        default: return {...state};
    }
}