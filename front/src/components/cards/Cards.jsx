//components
import Card from '../card/Card';

//styles
import styles from './cards.module.css';

export default function Cards({characters, onClose}) {
    return(
      <div className={styles.container}>
         {
            characters?.map(({id, name, status, gender, image}) => {
               return <Card
               key={id}
               id={id}
               name={name}
               status={status}
               gender={gender}
               image={image}
               onClose={onClose}
               />
            })
         }
      </div>
    )
}
