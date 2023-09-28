//redux (react)
import { useSelector, useDispatch } from "react-redux";
import { filterCards, orderCards, reset } from "../../redux/actions/actions";

//components
import Cards from "../cards/Cards";

//styles
import styles from './favorites.module.css';

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

   console.log(myFavorites)

   return(
        <div>
         <div className={styles.options}>
            <div className={styles.order}>
               <select name="order" onChange={handleOrder}>
                  <option value="A">Ascendente</option>
                  <option value="D">Descendente</option>
               </select>
            </div>
            <div className={styles.filter}>
               <select name="filter" onChange={handleFilter}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Genderless">Genderless</option>
                  <option value="unknown">unknown</option>
               </select>
            </div>
            <div className={styles.reset}>
               <button name='reset' onClick={handleReset}>Reset</button>
            </div>
            </div>
            
            <div>
               <Cards characters={myFavorites} />
            </div>
        </div>
    );
}