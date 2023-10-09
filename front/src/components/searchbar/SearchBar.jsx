import { useEffect, useState } from "react";

import styles from './searchbar.module.css';

export default function SearchBar({ onSearch }) {
   //const [id, setId] = useState("");
   const totalChar = 826;

   const [type, setType] = useState({
      type: "id", 
      page: 1,
      value: ""
   });

   const handleChange = (event) => {
      setType({
         ...type,
         value: event.target.value
      });
   }

   const handleType = (event) => {
      setType({
         ...type,
         type: event.target.value,
         value: ""
      });
   }

   useEffect(() => {
      setType({ ...type, page: 1 });
   }, [type.type]);

   const handlePage = (event) => {
      if(event.target.name === "sig" && type.page < 32) setType({ ...type, page: type.page + 1})
      if(event.target.name === "ant" && type.page > 1) setType({ ...type, page: type.page - 1});
   }

   useEffect(() => {
      onSearch(type);
   }, [type.page]);

   return (
      <div className={styles.search}>
         <button name="ant" onClick={handlePage} className={styles.page}>Anterior</button>
         <p>Page: {type.page}</p>
         <button name="sig" onClick={handlePage} className={styles.page}>Siguiente</button> 

         <select name="type" onChange={handleType}>
            <option value="id">Id</option>
            <option value="name">Name</option>
            <option value="status">Status</option>
            <option value="species">Species</option>
            <option value="gender">Gender</option>
         </select>

         <input type='search' onChange={handleChange} value={type.value} placeholder="id..." />

         <button onClick={() => onSearch(type)}>Add</button>

         <button onClick={() => onSearch({ type: "id", value: Math.floor(Math.random()*totalChar)})}>
                    Random
         </button>
      </div>
   );
}
