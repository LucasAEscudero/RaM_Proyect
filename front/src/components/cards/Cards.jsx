//components
import Card from '../card/Card';

//styles
import './cards.module.css';

export default function Cards({characters, onClose}) {
    return(
      <div id='wallpaper'>
         {
            characters?.map(({id, name, status, especies, gender, origin, image}) => {
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
    )
}
