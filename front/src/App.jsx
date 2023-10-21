//react
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
//import { removeFav} from './redux/actions/actions.js';

//axios
import axios from "axios";

//components
import Home from "./components/home/Home.jsx";
import Nav from "./components/nav/Nav.jsx";
import About from './components/about/About.jsx';
import Detail from './components/detail/Detail.jsx';
import Error from './components/error/error.jsx';
import Form from './components/form/Form.jsx';
import Favorites from './components/favorites/Favorites.jsx';
import Catalogue from "./components/catalogue/Catalogue.jsx";
import Music from "./components/music/Music.jsx";

//styles
import './App.css';

export default function App() {
  //hooks
  //characters-searchBar
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("id");
  const [pages, setPages] = useState(1);
  const [indicate, setIndicate] = useState("");

  //login-access
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  //redux
  //const dispatch = useDispatch();
  
  //search function
  const onSearch = async (type) => {
    //send param with case
    setIndicate(type.type);
    if(type.value === "") return null;
    
    //search by id case
    if(type.type === 'id'){

      if(search === "characters") setCharacters([]);
      setSearch("id");

      try{
        const { data } = await axios(`http://localhost:3001/rickandmorty/character/${type.value}`);

        let repeated = false;

        characters.forEach(character => {
          if(character.id === data.id) repeated = true;
        });
      
        if(!repeated) setCharacters((oldChars) => [...oldChars, data]);
      }
      catch(error){
        throw Error(error.message);
      }

    } else { //search by other cases
      //reset the catalogue of cards
      if(search === "id") setCharacters([]);
      setSearch("characters");
    
      try{
        const { data } = await axios(`http://localhost:3001/rickandmorty/characters/?type=${type.type}&&page=${type.page}&&value=${type.value}`);
        const { pages, characters } = data;

        if(characters){
          setCharacters([...characters]);
          setPages(pages);
        } 
        
      }
      catch(error){
        throw Error(error.message);
      }
    }
  }

  //delete all function
  const handleDelete = () => {
    setCharacters([]);
  }

  //onClose function
  const onClose = (id) => {
    const charFiltered = characters.filter((character) => {
      if(character.id !== id) return character;
    });

    setCharacters(charFiltered);

    //dispatch(removeFav(id)); //delete charFav since home
  }

  //login functions
  const inputUser = async ({ email, password }) => {
    try{ //obtain access
      const { data } = await axios(`http://localhost:3001/rickandmorty/login/?email=${email}&&password=${password}`);
// console.log(data)
      setAccess(data?.access);
      navigate('/home');
    }
    catch(error){
      throw Error(error.message);
    }
  }

  const registerUser = async ({email, password}) => {
    try{
      await axios.post(`http://localhost:3001/rickandmorty/register`, {
        email: email, 
        password: password
      });
    }
    catch(error){
      throw Error(error.message);
    }
  }

  //reset - access
  useEffect(() => {
    if(!access){
      //axios.delete('http://localhost:3001/rickandmorty/LogOutFav');

      setCharacters([]);

      navigate('/login');
    }
  }, [access]);

  //logOut function
  const logOut = () => {
    setAccess(false);
    navigate('/login');
  }

  //conditional: true => login form (first time) / false => access functional web 
  if(!access){
    return(
      <Routes>
        <Route path='/login' element={<Form inputUser={inputUser} registerUser={registerUser}/>}/>
        <Route path='*' element={<Error />}/>
      </Routes>
    );
  }
  else //normal rendering (after access)
  {
    return(
      <div>
        <Nav onSearch={onSearch} logOut={logOut}/>
        <Routes>
          <Route path='/about' element={<About />}/>
          <Route path='/home' 
          element={
            <Home onSearch={onSearch} 
              onClose={onClose} 
              characters={characters} 
              handleDelete={handleDelete}
              pages={pages}
              indicate={indicate}
            />
          }
          />
          <Route path='/detail/:id' element={<Detail />}/>
          <Route path='/favorites' element={<Favorites />}/>
          <Route path='/catalogue' element={<Catalogue />}/>
          <Route path='/music' element={<Music/>}/>
        </Routes>  
      </div>
    );
  }
}
