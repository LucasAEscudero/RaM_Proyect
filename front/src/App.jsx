//react
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeFav } from './redux/actions/actions.js';

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
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("id");

  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  //redux
  const dispatch = useDispatch();
  
  //search function
  const onSearch = async (type) => {
    if(type.value === "") return null;

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
        alert('Not found');
      }

    } else {
      if(search === "id") setCharacters([]);
      setSearch("characters");
    
      try{
        const { data } = await axios(`http://localhost:3001/rickandmorty/characters/?type=${type.type}&&page=${type.page}&&value=${type.value}`);

        if(data) setCharacters([...data]);
      }
      catch(error){
        alert('Not found');
      }
    }
  }

  //onClose function
  const onClose = (id) => {
    const charFiltered = characters.filter((character) => {
      if(character.id !== id) return character;
    });
    setCharacters(charFiltered);

    dispatch(removeFav(id)); //delete charFav since home
  }

  //login functions
  const login = async ({ email, password }) => {
    try{
      const access = axios(`http://localhost:3001/rickandmorty/login/?email=${email}&&password=${password}`);

      setAccess(access);
      navigate('/home');
    }
    catch(error){
      alert(error.message);
    }
  }

  useEffect(() => {
    !access && navigate('/login');
  }, [access]);

  const logOut = () => {
    setAccess(false);
    navigate('/login');
  }

  //conditional: true => login form (first time) / false => access functional web 
  if(!access){
    return(
      <Routes>
        <Route path='/login' element={<Form props={login}/>}/>
        <Route path='*' element={<Error />}/>
      </Routes>
    );
  }
  else //normal rendering (after access)
  {
    return(
      <>
        <Nav onSearch={onSearch} logOut={logOut}/>
        <Routes>
          <Route path='/about' element={<About />}/>
          <Route path='/home' element={<Home onSearch={onSearch} onClose={onClose} characters={characters}/>}/>
          <Route path='/detail/:id' element={<Detail />}/>
          <Route path='/favorites' element={<Favorites />}/>
          <Route path='/catalogue' element={<Catalogue />}/>
          <Route path='/music' element={<Music/>}/>
        </Routes>  
      </>
    );
  }
}
