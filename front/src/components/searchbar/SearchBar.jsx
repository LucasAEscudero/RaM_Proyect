import { useEffect, useState } from "react";

import styles from './searchbar.module.css';

export default function SearchBar({ onSearch, handleDelete, pages }) {
   //const [id, setId] = useState("");
   const totalChar = 826; //total characters api

   //object to search the characters
   const [type, setType] = useState({
      type: "id", 
      page: 1,
      value: ""
   });

   //input function
   const handleChange = (event) => {
      setType({
         ...type,
         value: event.target.value
      });
   }

   //object to search function
   const handleType = (event) => {
      setType({
         ...type,
         type: event.target.value,
         value: ""
      });
   }

   //reset page
   useEffect(() => {
      setType({ ...type, page: 1 });
   }, [type.type]);

   //page buttons function
   const handlePage = (event) => {
      if(event.target.name === "sig" && type.page < pages) setType({ ...type, page: type.page + 1})
      if(event.target.name === "ant" && type.page > 1) setType({ ...type, page: type.page - 1});
   }

   //send data to search
   useEffect(() => {
      onSearch(type);
   }, [type.page]);

   return (
      <div className={styles.search}>
         {type.type !== 'id' && <button name="ant" onClick={handlePage} className={styles.page}>Anterior</button>}
         {type.type !== 'id' && <p>Page: {type.page}</p>}
         {type.type !== 'id' && <button name="sig" onClick={handlePage} className={styles.page}>Siguiente</button>} 

         <select name="type" onChange={handleType}>
            <option value="id">Id</option>
            <option value="name">Name</option>
            <option value="status">Status</option>
            <option value="species">Species</option>
            <option value="gender">Gender</option>
         </select>

         <input type='search' onChange={handleChange} value={type.value} placeholder="Search here..." />

         { type.type === "id" && <button onClick={() => onSearch(type)}>Add</button>}
         { type.type !== "id" && <button onClick={() => onSearch(type)}>Search</button>}

         { type.type === "id" &&
         <button onClick={() => onSearch({ type: "id", value: Math.floor(Math.random()*totalChar)})}>
                    Random
         </button>}  

         { type.type === "id" && <button className={styles.deleteAll} onClick={handleDelete}>Delete All</button>}
      </div>
   );
}
