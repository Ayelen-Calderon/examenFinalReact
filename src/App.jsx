
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { routes } from "./routes";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";
import { useContextGlobal } from "./Components/utils/global.context";


function App() {

  const{stateTheme} = useContextGlobal()
  return (
      <div className={stateTheme.t ? 'App' : 'dark'}>
        <Navbar/>  
        <Routes>
            <Route path={routes.home} element={<Home/>} />
            <Route path={routes.detail} element={<Detail/>} />
            <Route path={routes.contact} element={<Contact/>} />
            <Route path={routes.favs} element={<Favs/>} />
        </Routes>
        <Footer/>
      </div>
  );
}

export default App;
