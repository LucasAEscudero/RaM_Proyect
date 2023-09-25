import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFav, removeFav } from '../../redux/actions/actions'; //actions

export default function Card({id, name, status, especies, gender, origin, image, onClose}) {
   const dispatch = useDispatch(); //obtener el dispatch
   const myFavorites = useSelector((state) => state.myFavorites); //acceder al estado global
   const [isFav, setIsFav] = useState(false);

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
            especies: especies, 
            gender: gender, 
            origin: origin, 
            image: image, 
            onClose: onClose 
         }));
      }
   }

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
         <div className="card" style={{display: "inline-block", minWidth:"500px"}}>
            {
               isFav ? (
                  <button onClick={handleFavorite}>❤️</button>
               ) : (
                  <button onClick={handleFavorite}>🤍</button>
               )
            }
            <button onClick={() => onClose(id)} style={{borderRadius:"50%"}}>X</button>
            <Link to={`/detail/${id}`}><h2>{name}</h2></Link>
            <h2>{status}</h2>
            <h2>{especies}</h2>
            <h2>{gender}</h2>
            <h2>{origin}</h2>
            <img src={image} alt={name} />
         </div>
      </>
   );
}
