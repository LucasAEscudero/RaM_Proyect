//axios
import axios from "axios";

//react
import { useState, useEffect } from "react";

//redux
import { getAll } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

//components
import Card from "../card/Card";

export default function Catalogue() {
    const dispatch = useDispatch();
    const characters = useSelector((state) => state.allCharacters);
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(getAll(page));
    }, [page]);

    const handleChange = (event) => {
        if(page >= 1 && page <= 42){
            if(event.target.name === 'siguiente' && page < 42) setPage(page + 1);
            if(event.target.name === 'anterior' && page > 1) setPage(page - 1);
        }
    }

    return (
        <div>
            <button name='anterior' onClick={handleChange}>Anterior Pagina</button>
            <button name='siguiente' onClick={handleChange}>Siguiente Pagina</button>
        {
            characters?.map(({id, name, status, especies, gender, origin, image}) => {
               return <Card
               key={id}
               id={id}
               name={name}
               status={status}
               especies={especies}
               gender={gender}
               origin={origin.name}
               image={image}
               />
            })
        }
        </div>
    );
}