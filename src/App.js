import React from "react";
import './App.module.scss'
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";

function App() {
  return (
    <div className="App">
        <div className="container">
            <Header/>
            <Intro/>
        </div>
    </div>
  );
}

export default App;
