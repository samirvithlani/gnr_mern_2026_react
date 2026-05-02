import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import {Header} from "./components/Header" //export const
import Footer from "./components/Footer" //export default
import { Content } from "./components/Content";
import { MapDemo1 } from "./components/MapDemo1";
import { MapDemo2 } from "./components/MapDemo2";
import { MaoDemo3 } from "./components/MaoDemo3";
//import "./App.css";


function App() {
  

  return (
    <div>
      <Header></Header>
      {/* <MapDemo2></MapDemo2> */}
      <MaoDemo3></MaoDemo3>
      {/* <MapDemo1></MapDemo1> */}
      {/* <Content></Content>
      <Footer></Footer> */}
    </div>
  );
}

export default App;
