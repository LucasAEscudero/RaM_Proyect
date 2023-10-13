//components
import SearchBar from "../searchbar/SearchBar";
import Cards from "../cards/Cards";

//styles
import styles from './home.module.css';

export default function Home({ onSearch, onClose, characters, handleDelete, pages}) {
    return(
        <div>
            <div className={styles.container}>
                <SearchBar onSearch={onSearch} handleDelete={handleDelete} pages={pages} />
            </div>  
            <div>
                <Cards characters={characters} onClose={onClose} />
            </div>
        </div>
    );
}