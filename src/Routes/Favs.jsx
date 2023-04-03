import React from "react";
import Card from "../Components/Card";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const fav = []
// JSON.parse(localStorage.getItem("myArray"))
console.log(fav)

const Favs = () => {

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
         {/* Deberan renderizar una Card por cada uno de ellos */}

         {fav.map((fav) =>
        
        <Card  key={fav.id} name={fav.name} username={fav.username} id={fav.id}/>
      
    )}

      </div>
    </>
  );
};

export default Favs;
