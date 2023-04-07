import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";
//import "../hojas-de-estilo/fav.css"


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context




const Favs = () => {  

  const {setArray} = useContextGlobal()

  const fav =  JSON.parse(localStorage.getItem("myArray"))
  console.log(fav)


  const limpiarFav = () =>{setArray(localStorage.setItem("myArray", JSON.stringify([])))}

  return (
    <div className="fav vista">

      <button onClick={limpiarFav} >🗑️</button>

      <h1>Dentists Favs</h1>


      

      <div className="card-grid">

        {/* este componente debe consumir los destacados del localStorage */}
         {/* Deberan renderizar una Card por cada uno de ellos */}

         {fav.map((fav) =>
        
        <Card  key={fav.id} name={fav.name} username={fav.username} id={fav.id} showButton={false}/>
      
    )}

      </div>
    </div>
  );
};

export default Favs;
