import Card from './Card';
import characters from "../data";

export default function Cards() {
    return(
      <div>
         {
            characters.map(({id, name, status, especies, gender, origin, image}) => {
               return <Card
                  key={id}
                  name={name}
                  status={status}
                  especies={especies}
                  gender={gender}
                  origin={origin.name}
                  image={image}
                  onClose={() => {alert('Emulamos que se cierra')}}
               />
            })
         }
      </div>
    )
}
