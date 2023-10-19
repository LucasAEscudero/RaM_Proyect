//components
import SearchBar from "../searchbar/SearchBar";
import Cards from "../cards/Cards";

//styles
import styles from './home.module.css';

export default function Home({ onSearch, onClose, characters, handleDelete, pages, indicate}) {
    return(
        <div>
            <div className={styles.container}>
                <SearchBar onSearch={onSearch} handleDelete={handleDelete} pages={pages} />
            </div>  
            <div>
                {
                    indicate !== "id" 
                    ? <Cards characters={characters}/> 
                    : <Cards characters={characters} onClose={onClose} />
                }
            </div>
        </div>
    );
}