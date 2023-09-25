import Card from '../card/Card';

export default function Cards({characters, onClose}) {
    return(
      <div>
         {
            characters.map(({id, name, status, especies, gender, origin, image}) => {
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
