import SearchBar from "../searchbar/SearchBar";
import { Link } from "react-router-dom";

export default function Nav({onSearch, logOut}) {
    const totalChar = 826;
    return(
        <>
            <div>
                <div>
                    <Link to='/about'><button>About</button></Link>
                    <Link to='/home'><button>Home</button></Link>
                    <Link to='/favorites'><button>Favorites</button></Link>
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