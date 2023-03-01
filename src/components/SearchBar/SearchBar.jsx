import { useState } from 'react';
import styles from './SearchBar.module.css'

export default function SearchBar(props) {

   const [character,setCharacter]=useState("");

   const handleChange=(evento)=>{
      const {value}=evento.target
      setCharacter(value)
   }

   
   return (
      <div className={styles.search}>
         <input 
            
            id="search" 
            type='search' 
            onChange={handleChange}  
            className={styles.input}
         />
         <button onClick={()=>props.onSearch(character)} className={styles.boton}>Agregar</button>
      </div>
   );
}
