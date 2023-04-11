import React from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {apiState} = useContextGlobal();

         

  return (
    <main className="home" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {apiState.map((value) =>
        
            <Card  key={value.id} 
              name={value.name} 
              username={value.username} 
              id={value.id} 
              favorito ={false}
            />
          
        )}
      </div>
    </main>
  )
}

export default Home