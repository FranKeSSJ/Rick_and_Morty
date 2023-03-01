import './App.css'
import Card from './components/Card/Card.jsx'
import Cards from './components/Cards/Cards.jsx'
import SearchBar from './components/SearchBar/SearchBar.jsx'
import { useState } from 'react'
import Nav from './components/Nav/Nav.jsx'
//1:36
function App () {
 //creando estado
  const [characters, setCharacters]=useState([]);

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
  }
  const onClose=(id)=>{
    setCharacters(characters.filter((char)=>char.id !== id))
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <Nav
          onSearch={onSearch}
        />
      </div>
      <hr/>
      <div>
        <Cards
          characters={characters}
          onClose={onClose}
        />
      </div>
      <hr/>




      {/* <div>
        <SearchBar
          onSearch={(characterID) => alert(characterID)}
        />
      </div> */}
      
      {/* <div className='rick'>
        <Card 
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => alert('Emulamos que se cierra la card')}
        />
      </div> */}
    </div>
  )
}

export default App
