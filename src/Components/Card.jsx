import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { VscStarFull, VscStarEmpty } from "react-icons/vsc";
import { RiAddCircleLine} from "react-icons/ri";

const Card = ({ name, username, id, favorito}) => {



const [icoValue, setIcon] = useState(<VscStarEmpty/>)


  const {setArray} = useContextGlobal()

 



  const [dentisSelected, setDentisSelected] = useState();

  const url = `https://jsonplaceholder.typicode.com/users/${id}`;


  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => setDentisSelected(data));
  // }, [url]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setDentisSelected(data);
        const array = JSON.parse(localStorage.getItem('myArray'));
        const existeDentista = array.find((elemento) => elemento.id === data.id);
        if (existeDentista) {
          if (existeDentista.icon === 'filled') {
            setIcon(<VscStarFull/>);
          } else {
            setIcon(<VscStarEmpty/>);
          }
        } else {
          setIcon(<VscStarEmpty/>);
        }
      });
  }, [url]);

  // const addFav = () => {
   
  //   const array = JSON.parse(localStorage.getItem('myArray'));
  
    
  //   const existeDentista = array.find((elemento) => elemento.id === dentisSelected.id);
  //   if (existeDentista) {
  //     console.log('No se puede agregar dentista ya existe');
  //   } else {   
  //     array.push(dentisSelected);
  //     localStorage.setItem('myArray', JSON.stringify(array));
  //     setArray(array);
  //    setIcon(<VscHeartFilled/>)
  //     toast('Se agrego a favorito!', {
  //       position: "top-right",
  //       autoClose: 3000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //       });
  //   }
  // }
  const addFav = () => {
   
    const array = JSON.parse(localStorage.getItem('myArray'));
  
    const existeDentista = array.find((elemento) => elemento.id === dentisSelected.id);
    if (existeDentista) {
      console.log('No se puede agregar dentista ya existe');
    } else {
      array.push({...dentisSelected, icon: 'filled'}); // Guardar el estado del icono junto con la información del dentista
      localStorage.setItem('myArray', JSON.stringify(array));
      setArray(array);
      setIcon(<VscStarFull/>);
      toast('Se agrego a favorito!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  const eliminarCard = () => {
    
    const array = JSON.parse(localStorage.getItem("myArray"));
    
    const index = array.findIndex((elemento) => elemento.id === dentisSelected.id);
    dentisSelected.icon = 'fill'
    if (index > -1) {
    
      array.splice(index, 1);
      localStorage.setItem("myArray", JSON.stringify(array));
      setArray(array);

      toast('Se elimino favorito!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  };




  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}

       

        <div>
          <img className="card-img"  src="/images/doctor.jpg" alt="Doctor" width={200}/>
          <h3>{name}</h3>
          <h2>{username}</h2>
          
        </div>

     
       
       

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
     <div className="contenedor-button-card">
      <Link key={id} to={`/dentist/${id}`} className="button-detail" title="Details"> <RiAddCircleLine/></Link>
  

      { 
      favorito
      ?
      <p onClick={eliminarCard } className="favButton" title="Delete fav">
         {icoValue}
      </p> 
      : 
      <p onClick={addFav} className="favButton"title="Add fav" >
     {icoValue}
      </p>
      }
       </div>
        
    </div>
  );
};

export default Card;
