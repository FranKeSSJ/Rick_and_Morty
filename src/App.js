import './App.css'
import Card from './components/Card/Card.jsx'
import Cards from './components/Cards/Cards.jsx'
import SearchBar from './components/SearchBar/SearchBar.jsx'
import characters,{ Rick } from './data.js'

function App () {
  return (
    <div className='App' style={{ padding: '25px' }}>
      
      <div>
        <SearchBar
          onSearch={(characterID) => alert(characterID)}
        />
      </div>
      <hr/>
      <div className='rick'>
        <Card 
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => alert('Emulamos que se cierra la card')}
        />
      </div>
      <hr/>
      <div>
        <Cards
          characters={characters}
        />
      </div>
      <hr/>
    </div>
  )
}

export default App
