//redux (react)
import { useSelector, useDispatch } from "react-redux";
import { filterCards, orderCards, reset } from "../../redux/actions/actions";

//components
import Card from "../card/Card";

export default function Favorites() {
   const dispatch = useDispatch();
   const myFavorites = useSelector((state) => state.myFavorites); //obtain prop myFavorites (global state) 

   const handleOrder = (event) => {
      dispatch(orderCards(event.target.value));
   }

   const handleFilter = (event) => {
      dispatch(filterCards(event.target.value));
   }

   const handleReset = () => {
      dispatch(reset());
   }

   return(
        <div>
            <select name="order" onChange={handleOrder}>
               <option value="A">Ascendente</option>
               <option value="D">Descendente</option>
            </select>

            <select name="filter" onChange={handleFilter}>
               <option value="Male">Male</option>
               <option value="Female">Female</option>
               <option value="Genderless">Genderless</option>
               <option value="unknown">unknown</option>
            </select>

            <button name='reset' onClick={handleReset}>Reset</button>

            {
            myFavorites.map(({id, name, status, especies, gender, origin, image}) => {
               return <Card
               key={id}
               id={id}
               name={name}
               status={status}
               especies={especies}
               gender={gender}
               origin={origin.name}
               image={image}
               />
            })
         } 
        </div>
    );
}