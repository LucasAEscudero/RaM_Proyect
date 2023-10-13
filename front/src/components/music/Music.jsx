import axios from "axios";
import ReactPlayer from 'react-player';

import styles from './Music.module.css'

export default function Music() {

    return(
        <div className={styles.container}>
            <div>
                <ReactPlayer
                    url='https://www.youtube.com/playlist?list=PL3IdZsqzzAmL0AFqSPWQrdf5aQNQO_yPt'
                    playing={true}
                    controls={true}
                />
            </div>
        </div>
    );
}