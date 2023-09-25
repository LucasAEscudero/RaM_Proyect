import Cards from './components/cards/Cards.jsx';
import './App.css'
import Nav from "./components/nav/Nav.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/about/About.jsx';
import Detail from './components/detail/Detail.jsx';
import Error from './components/error/Error.jsx';
import Form from './components/form/Form.jsx';
import Favorites from './components/favorites/Favorites.jsx';
import { useDispatch } from 'react-redux';
import { removeFav } from './redux/actions/actions.js';

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const email = 'mygmail@gmail.com';
  const password = 'password123';
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => {
        if (data.name) {
          let repeated = false;
          characters.forEach(character => {
            if(character.id === data.id) repeated = true;
          });
          if(!repeated)setCharacters((oldChars) => [...oldChars, data]);
        }
    })
    .catch(() => {
      alert('¡No hay personajes con este ID!');
    })
  }

  const onClose = (id) => {
    const charFiltered = characters.filter((character) => {
      if(character.id !== id) return character;
    });
    setCharacters(charFiltered);

    dispatch(removeFav(id)); //eliminar charFav desde home
  }

  const login = (userData) => {
    if(userData.email === email && userData.password === password){
      setAccess(true);
      navigate('/home');
    } else {
      alert('El email o la contrasena son invalidos');
    }
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  //extra excercise: log out
  const logOut = () => {
    navigate('/');
  }

  if(useLocation().pathname == '/'){
    return(
      <Routes>
        <Route path='/' element={<Form props={login}/>}/>
      </Routes>
    );
  }
  else
  {
    return(
      <>
        <Nav onSearch={onSearch} logOut={logOut}/>
        <Routes>
          <Route path='/about' element={<About />}/>
          <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
          <Route path='/detail/:id' element={<Detail />}/>
          <Route path='/favorites' element={<Favorites />}/>
          <Route path='*' element={<Error />}/>
        </Routes>  
      </>
    );
  }
}
