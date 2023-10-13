//react
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { addFav, removeFav } from '../../redux/actions/actions'; //actions

//styles
import styles from './card.module.css';

export default function Card({id, name, status, gender, image, onClose}) {
   const dispatch = useDispatch(); //obtain dispatch
   const myFavorites = useSelector((state) => state.myFavorites); //global state access
   const [isFav, setIsFav] = useState(false); //character fav state

   //favorite changes
   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         dispatch(removeFav(id));
      } else {
         setIsFav(true);
         dispatch(addFav({ 
            id: id,
            name: name, 
            status: status, 
            gender: gender,
            image: image, 
            onClose: onClose 
         }));
      }
   }

   //favorites changes effect
   useEffect(() => {
      if(myFavorites){
         myFavorites.forEach((fav) => {
            if (fav.id === id) {
               setIsFav(true);
            }
         });
      }  
   }, [myFavorites]);

   return (
      <>
         <div className={styles.card}>
            {
               isFav ? (
                  <button className={styles.fav} onClick={handleFavorite}>❤️</button>
               ) : (
                  <button className={styles.fav} onClick={handleFavorite}>🤍</button>
               )
            }

            { onClose && <button className={styles.close} onClick={() => onClose(id)}>
                  X
               </button> }

            <img src={image} alt={name} />
            <Link to={`/detail/${id}`}><h2 className={styles.name}>{id}- {name}</h2></Link>
            <div className={styles.dates}>
               <h2>{status}</h2>
               <h2>{gender}</h2>
            </div>  
         </div>
      </>
   );
}
