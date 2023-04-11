import { createContext, useContext, useEffect, useReducer, useState } from "react";




export const ContextGlobal = createContext(undefined);

const theme = {
  dark: {
      t: false,   
  },
  
  light: {
      t: true,   
     }
}

const initialState = theme.light ;
const initialStateApi = []

function reducer(state, action) {
  switch (action.type) {
      case 'SWITCH_DARK':
          return theme.dark
      case 'SWITCH_LIGHT':
          return theme.light
      default:
          throw new Error()
     
  }
}
const apiReducer = (state, action) =>{
  switch(action.type){
    case 'GET_API':
    return action.payload
    default:
      throw new Error()
  }
}

export const ContextProvider = ({ children }) => {

  const [stateTheme, dispatchTheme] = useReducer(reducer, initialState)
  const [apiState, dispatchApi] = useReducer(apiReducer , initialStateApi)


  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [myArray, setArray] = useState([]);
  let arrayExiste =  localStorage.getItem("myArray") ? true :
  localStorage.setItem("myArray", JSON.stringify(myArray))

  useEffect(() => {
   
    const data = JSON.parse(arrayExiste) || [];
    setArray(data);
  }, []);

  

  const url = 'https://jsonplaceholder.typicode.com/users';



    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => dispatchApi({type : 'GET_API', payload: data}))
       
    }, [])


  return (
    <ContextGlobal.Provider value={{apiState, myArray, setArray, stateTheme, dispatchTheme}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () => useContext(ContextGlobal)
