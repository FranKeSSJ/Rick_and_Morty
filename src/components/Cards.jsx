import Card from './Card';
import './Cards.css'
export default function Cards(props) {
   const { characters } = props;
   
   return (
      <div className='Cards'>
         {
            characters.map( (items) => {
               return (
                  <Card 
                     name={items.name}
                     species={items.species}
                     gender={items.gender}
                     image={items.image}
                     onClose={() => window.alert('Emulamos que se cierra la card')}
                  />
               )
               
            })
         }
      </div>
   );
}
