import error from './resources/error.png';
import styles from './error.module.css';

export default function Error() {
    return(
        <div className={styles.container}>
            <img src={error} alt="Advertence" />
        </div>
    );
}