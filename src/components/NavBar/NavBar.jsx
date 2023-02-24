import styles from "./NavBar.module.css";

export default function NavBar(props) {
    return (
       <div className={styles.components}>
          <input type='search' />
          <button onClick={()=> props.onSearch("hola .|.")}>Agregar</button>
       </div>
    );
 }
 