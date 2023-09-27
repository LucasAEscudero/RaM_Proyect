//react
import { Link } from "react-router-dom";

//components
import SearchBar from "../searchbar/SearchBar";

//styles
import './nav.module.css';

export default function Nav({onSearch, logOut}) {
    const totalChar = 826;
    return(
        <>
            <div id="nav">
                <div>
                    <Link to='/about'><button>About</button></Link>
                    <Link to='/home'><button>Home</button></Link>
                    <Link to='/favorites'><button>Favorites</button></Link>
                    <Link to='/catalogue'><button>Catalogue</button></Link>
                </div>

                <div>
                    <SearchBar onSearch={onSearch}/>
                    <button onClick={() => onSearch(Math.floor(Math.random()*totalChar))}>Random</button>
                </div>

                <button onClick={logOut}>Log Out</button>
            </div>
        </>
    );
}