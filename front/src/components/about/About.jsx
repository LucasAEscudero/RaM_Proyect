//styles
import './about.module.css';

//resources
import profileImage from './resources/profileImage.jpg';
import githubIcon from './resources/gitHubIcon.png';
import linkedinIcon from './resources/linkedinIcon.png';
import instagramIcon from './resources/instagramIcon.png';
import discordIcon from './resources/discordIcon.png';

export default function About(){
    return(
        <div>
            <img src="../resources/icons/profileImage.jpg" alt="Profile image" />

            <h2>Lucas Agustin Escudero</h2>

            <p>Contact info: </p>
            <ul id="contact">
                <li>
                    <a href="https://github.com/LucasAEscudero">
                        <img src="../resources/icons/gitHubIcon.png" alt="GitHub profile" />
                        <p>Username: LucasAEscudero</p>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/lucas-escudero-54195322b/">
                        <img src="../resources/icons/linkedinIcon.png" alt="Linkedin profile" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/lucasescud/?next=%2F">
                        <img src="../resources/icons/instagramIcon.png" alt="Instagram profile" />
                    </a>
                </li>
                <li>
                    <img src="../resources/icons/discordIcon.png" alt="Discord profile" />
                    <p>Username: Slyder7276</p>
                </li>
            </ul>
        </div>
    );
}