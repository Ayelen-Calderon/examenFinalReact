import { createContext, useContext, useEffect, useState } from "react";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo



  

   

  const url = 'https://jsonplaceholder.typicode.com/users';

    const [value, setValue] = useState([])

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setValue(data))
    }, [])


  return (
    <ContextGlobal.Provider value={{value, setValue}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () => useContext(ContextGlobal)
