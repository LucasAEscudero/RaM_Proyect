import axios from "axios";
import ReactPlayer from 'react-player';

import styles from './Music.module.css'

export default function Music() {

    return(
        <div styles={styles.container}>
            <ReactPlayer
                url='https://www.youtube.com/playlist?list=PLghCK__yMK3oEnb1gJULpSOUOvdtyBmyH'
                playing={true}
                controls={true}
            />
        </div>
    );
}