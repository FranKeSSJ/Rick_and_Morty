import estilos from "./Card.module.css"

export default function Card(props) {
   return (
      <div className={estilos.Card}>
         
         <button onClick={()=>props.onClose()} className={estilos.closeButton}>X</button>
         <h2 className={estilos.name}>{props.name}</h2>
         <img  src={props.image} alt={props.name} className={estilos.image} />
         <div className={estilos.datos}>
            <h2 className={estilos.species}>{props.species}</h2>
            <h2 className={estilos.gender}>{props.gender}</h2>
         </div>
         
         
      </div>
   );
}
