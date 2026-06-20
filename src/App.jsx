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
import { Watch } from "./components/Netflix/Watch";
import { Error404 } from "./components/Error404";
import { Teams } from "./components/ipl/Teams";
import { TeamDetail } from "./components/ipl/TeamDetail";
import { Students } from "./components/Students";
import { FuncCallDemo } from "./components/FuncCallDemo";
import { TableDemo } from "./components/TableDemo";
import { TableDemo2 } from "./components/TableDemo2";
import { UseStateDemo1 } from "./components/UseStateDemo1";
import { UseStateDemo2 } from "./components/UseStateDemo2";
import { UseStatedemo3 } from "./components/UseStatedemo3";
import { InputDemo1 } from "./components/InputDemo1";
import { InputDemo2 } from "./components/InputDemo2";
import { InputDemo3 } from "./components/inputDemo3";
import { FormDemo1 } from "./components/form/FormDemo1";
import { FormDemo2 } from "./components/form/FormDemo2";
import { FormDemo3 } from "./components/form/FormDemo3";
import { FormDemo4 } from "./components/form/FormDemo4";
import { FormDemo5 } from "./components/form/FormDemo5";
//import "./App.css";


function App() {
  

  return (
    <div>
      <Navbar></Navbar>
          <Routes>
              <Route path="/" element ={<MapDemo2/>}></Route>
              <Route path="/netflixshows" element ={<NetflixShows/>}></Route>
              <Route path="/movies" element = {<NetflixMovies/>}></Route>
              <Route path="/watch/:name" element = {<Watch/>}></Route>
              <Route path="/teams" element= {<Teams/>}></Route>
              <Route path="/teamdetail/:id" element = {<TeamDetail/>}></Route>
              <Route path="/students" element ={<Students/>}></Route>
              <Route path="/funcall" element ={<FuncCallDemo/>}></Route>
              <Route path="/table" element = {<TableDemo/>}></Route>
              <Route path="/table2" element = {<TableDemo2/>}></Route>
              <Route path="/*" element = {<Error404/>}></Route>
              <Route path="/useStateDemo1" element ={<UseStateDemo1/>}></Route>
              <Route path="/useStateDemo2" element ={<UseStateDemo2/>}></Route>
              <Route path="/useStateDemo3" element ={<UseStatedemo3/>}></Route>
              <Route path="/inputdemo1" element = {<InputDemo1/>}></Route>
              <Route path="/inputdemo2" element = {<InputDemo2/>}></Route>
              <Route path="/inputdemo3" element = {<InputDemo3/>}></Route>
              <Route path="/formdemo1" element ={<FormDemo1/>}></Route>
              <Route path="/formdemo2" element ={<FormDemo2/>}></Route>
              <Route path="/formdemo3" element ={<FormDemo3/>}></Route>
              <Route path="/formdemo4" element ={<FormDemo4/>}></Route>
              <Route path="/formdemo5" element ={<FormDemo5/>}></Route>
              

          </Routes>
    </div>
  );
}

export default App;
