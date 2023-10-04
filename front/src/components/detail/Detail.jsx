import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from './detail.module.css';

export default function Detail(){
    const { id } = useParams(); //obtain character id
    const [character, setCharacter] = useState([]);

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

    return(
        <div className={styles.cards}>
            <img src={character?.image} alt={character?.name} />
            <div className={styles.info}>
                <h2>Name: {character?.name}</h2>
                <h2>Id: {character?.id}</h2>
                <h2>Status: {character?.status}</h2>
                <h2>Specie: {character?.species}</h2>
                <h2>Gender: {character?.gender}</h2>
                <h2>Origin: <a href={character?.origin?.url}>{character?.origin?.name}</a></h2>
            </div>
        </div>
    );
}