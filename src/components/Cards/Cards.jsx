import Card from '../Card/Card';
import estilos from './Cards.module.css';

// donde me quede 1:12

export default function Cards(props) {
   const { characters } = props;
   
   return (
      <div className={estilos.Cards}>
         {
            characters.map( (items) => {
               return (
                  <Card 
                     key={items.id}
                     name={items.name}
                     species={items.species}
                     gender={items.gender}
                     image={items.image}
                     onClose={()=>props.onClose(items.id)}
                  />
               )
               
            })
         }
      </div>
   );
}
