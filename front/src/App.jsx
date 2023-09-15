import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import './App.css'

function App() {
  return(
    <>
      <SearchBar onSearch={() => window.alert('Se ha agregado un elemento')} /> 
      <div class="cardsContainer">
        <Cards />
      </div>
    </>
  );
}

export default App
