import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ImageColorPicker } from 'react-image-color-picker';

import styles from './detail.module.css';
// import Typewriter from 'typewriter-effect'

export default function Detail(){
    const { id } = useParams(); //obtain character id
    const [character, setCharacter] = useState([]);
    const words = {
        status: character?.status?.toLowerCase(),
        species: character?.species?.toLowerCase() + " ",
        origin: " " + character?.origin?.name
    };
    const [color, setColor] = useState({
        "--color-status": "inherit"
    }); 

    //import all info character
    useEffect(() => {
        axios(`http://127.0.0.1:3001/rickandmorty/character/${id}`)
        .then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
    }, [id]);

    const handleColorPick = (color) => {
        setColor({ "--color-status": color });
    };

    return(
        <div className={styles.cards}>
            <div className={styles.img}>
                <ImageColorPicker
                    onColorPick={handleColorPick}
                    imgSrc={character?.image}
                    zoom={1}
                    
                />
            </div>

            {/*<img src={character?.image} alt={character?.name} />*/}
            <div className={styles.info} style={color}>
                <p>
                    <span>
                    {character.gender == "Male" && 'He '}
                    {character.gender == "Female" && 'She '}
                    {character.gender == "unknown" && 'It '}
                    {character.gender == "Genderless" && 'It '}
                    </span> is <span>{character.name}</span> and live in:  
                    <span>
                    {words.origin}
                    </span>.
                    <br />
                    <span>
                    {character.gender == "Male" && 'He '}
                    {character.gender == "Female" && 'She '}
                    {character.gender == "unknown" && 'It '} 
                    {character.gender == "Genderless" && 'It '}
                    </span> belongs to the <span>{words.species}</span>
                    species and 
                    <span>
                    {character.gender == "Male" && ' his '}
                    {character.gender == "Female" && ' her '}
                    {character.gender == "unknown" && ' has not '}
                    {character.gender == "Genderless" && ' has not '}
                    </span>
                    gender <span>{character.gender == "Male" && "is male"}
                    {character.gender == "Female" && "is female"}</span>.
                    <br />
                    <span>
                    {character.gender == "Male" && 'He '}
                    {character.gender == "Female" && 'She '}
                    {character.gender == "unknown" && 'It '}
                    {character.gender == "Genderless" && 'It '}
                    </span>
                    is found to be: <span>{words.status}</span>.
                </p>
            </div>
        </div>
    );
}