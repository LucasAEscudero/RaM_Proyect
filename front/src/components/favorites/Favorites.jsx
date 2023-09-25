import { useSelector } from "react-redux";
import Card from "../card/Card";

export default function Favorites() {
    const myFavorites = useSelector((state) => state.myFavorites);

    return(
        <div>
           {
              myFavorites.map(({id, name, status, especies, gender, origin, image, onClose}) => {
                 return <Card
                 key={id}
                 id={id}
                 name={name}
                 status={status}
                 especies={especies}
                 gender={gender}
                 origin={origin.name}
                 image={image}
                 onClose={onClose}
                 />
              })
           }
        </div>
    );
}