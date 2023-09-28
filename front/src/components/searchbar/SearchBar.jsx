import { useState } from "react";
import styles from './searchbar.module.css';

export default function SearchBar({onSearch}) {
   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value);
   }

   return (
      <div className={styles.search}>
         <input type='search' onChange={handleChange} value={id} placeholder="id..." />
         <button onClick={() => onSearch(id)}>Add</button>
      </div>
   );
}
