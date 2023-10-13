//react
import { useState, useEffect } from "react";

//redux
import { getAll } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

//components
import Cards from "../cards/Cards";

//styles
import styles from './catalogue.module.css';

export default function Catalogue() {
    const dispatch = useDispatch();
    const characters = useSelector((state) => state.allCharacters);
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(getAll(page));
    }, [page]);

    const handleClick = (event) => {
        if(page >= 1 && page <= 42){
            if(event.target.name === 'siguiente' && page < 42) setPage(page + 1);
            if(event.target.name === 'anterior' && page > 1) setPage(page - 1);
        }

        if(event.target.name === 'primero') setPage(1);
        if(event.target.name === 'ultimo') setPage(42);
    }

    return (
        <div className={styles.catalogue}>
            <div className={styles.navigate}>
                <button name='primero' onClick={handleClick}>{'<<'}</button>
                <button name='anterior' onClick={handleClick}>Anterior</button>
                <p>Page: {page}</p>
                <button name='siguiente' onClick={handleClick}>Siguiente</button>
                <button name='ultimo' onClick={handleClick}>{'>>'}</button>
            </div>

        <Cards characters={characters}/>
        </div>
    );
}