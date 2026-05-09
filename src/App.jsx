import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import {Header} from "./components/Header" //export const
import Footer from "./components/Footer" //export default
import { Content } from "./components/Content";
import { MapDemo1 } from "./components/MapDemo1";
import { MapDemo2 } from "./components/MapDemo2";
import { MaoDemo3 } from "./components/MaoDemo3";
import { MapDemo3 } from "./components/MapDemo3";
import { Route, Routes } from "react-router-dom";
import { NetflixShows } from "./components/Netflix/NetflixShows";
import { NetflixMovies } from "./components/Netflix/NetflixMovies";
import { Navbar } from "./components/Navbar";
//import "./App.css";


function App() {
  

  return (
    <div>
      <Navbar></Navbar>
          <Routes>
              <Route path="/netflixshows" element ={<NetflixShows/>}></Route>
              <Route path="/movies" element = {<NetflixMovies/>}></Route>
          </Routes>
    </div>
  );
}

export default App;
