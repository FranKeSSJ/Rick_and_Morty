import styles from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";

export default function Nav(props) {
    return (
       <div className={styles.navegacion}>
         <div className={styles.NavLinks}>
            <NavLink to="/about">
               <button>About</button>
            </NavLink>
            <NavLink to="/home">
               <button>Home</button>
            </NavLink>
            <NavLink to='/detail/:detailId'>
               <button>Detail</button>
            </NavLink>
         </div>
         <div>
            <SearchBar onSearch={props.onSearch}/>
         </div>
       </div>
    );
 }
 