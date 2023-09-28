//react
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeFav } from './redux/actions/actions.js';

//axios
import axios from "axios";

//components
import Cards from './components/cards/Cards.jsx';
import Nav from "./components/nav/Nav.jsx";
import About from './components/about/About.jsx';
import Detail from './components/detail/Detail.jsx';
import Error from './components/error/Error.jsx';
import Form from './components/form/Form.jsx';
import Favorites from './components/favorites/Favorites.jsx';
import Catalogue from "./components/catalogue/Catalogue.jsx";

//styles
import './App.css';

export default function App() {
  //hooks
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  //redux
  const dispatch = useDispatch();
  //verification
  const email = 'gmail@gmail.com'; //gmail
  const password = 'pass123'; //password
  
  //search function
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

  //onClose function
  const onClose = (id) => {
    const charFiltered = characters.filter((character) => {
      if(character.id !== id) return character;
    });
    setCharacters(charFiltered);

    dispatch(removeFav(id)); //delete charFav since home
  }

  //login funtion
  const login = (userData) => {
    if(userData.email === email && userData.password === password){
      setAccess(true);
      navigate('/home');
    }
  }

  //negate access function (form)
  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  //log out function (form)
  const logOut = () => {
    setAccess(false);
    navigate('/');
  }

  console.log(access)
  //conditional: true => login form (first time) / false => access functional web 
  if(!access){
    return(
      <Routes>
        <Route path='/' element={<Form props={login}/>}/>
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
          <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
          <Route path='/detail/:id' element={<Detail />}/>
          <Route path='/favorites' element={<Favorites />}/>
          <Route path='/catalogue' element={<Catalogue />}/>
          <Route path='*' element={<Error />}/>
        </Routes>  
      </>
    );
  }
}
