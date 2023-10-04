//styles
import styles from './about.module.css';

//resources
import profileImage from './resources/profileImage.jpeg';
import githubIcon from './resources/gitHubIcon.png';
import linkedinIcon from './resources/linkedinIcon.png';
import discordIcon from './resources/discordIcon.png';

export default function About(){
    return(
        <div className={styles.profile}>
            <div>
                <img src={profileImage} alt="Profile image" />
            </div>
            <div className={styles.allInfo}>
                <h2>Lucas Agustin Escudero</h2>
                <p>Contact information: </p>

                <ul className={styles.contact}>
                    <li className={styles.red}>
                        <a href="https://github.com/LucasAEscudero">
                            <img className={styles.icon} src={githubIcon} alt="GitHub profile" />
                            <p>LucasAEscudero</p>
                        </a>
                    </li>
                    <li className={styles.red}>
                        <a href="https://www.linkedin.com/in/lucas-escudero-54195322b/">
                            <img className={styles.icon} src={linkedinIcon} alt="Linkedin profile" />
                            <p>Lucas Escudero</p>
                        </a>
                    </li>
                    <li className={styles.red}>
                        <img className={styles.icon} src={discordIcon} alt="Discord profile" />
                        <p>Slyder7276</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}