export default function Card({name, status, especies, gender, origin, image, onClose}) {
   return (
      <>
         <div class="card">
            <button onClick={onClose}>X</button>
            <h2>{name}</h2>
            <h2>{status}</h2>
            <h2>{especies}</h2>
            <h2>{gender}</h2>
            <h2>{origin}</h2>
            <img src={image} alt={name} />
         </div>
      </>
   );
}
