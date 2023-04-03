import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import doctor from '../imagenesPrueba/doctor.jpg';
import { useContextGlobal } from "./utils/global.context";



const Card = ({ name, username, id }) => {

  const {setArray} = useContextGlobal()

  const [dentisSelected, setDentisSelected] = useState();

  const url = `https://jsonplaceholder.typicode.com/users/${id}`;





  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDentisSelected(data));
  }, [url]);

  const addFav = () => {
    const array = JSON.parse(localStorage.getItem('myArray'));
  
    
    const existeDentista = array.find((elemento) => elemento.id === dentisSelected.id);
    if (existeDentista) {
      console.log('No se puede agregar dentista ya existe');
    } else {
     
      array.push(dentisSelected);
      localStorage.setItem('myArray', JSON.stringify(array));
      setArray(array);
    }


  }




  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}

        <Link key={id} to={`/dentist/${id}`} >

        <div>
          <img className="card-img"  src={doctor}  alt="Doctor" width={200}/>
          <h3>{name}</h3>
          <h2>{username}</h2>
        </div>

        </Link>
       
       

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
       

        <button  onClick={addFav} className="favButton" >Add fav</button>
    
        
    </div>
  );
};

export default Card;
