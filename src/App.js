import React from "react";
import './App.module.scss'
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import NewArrivals from './components/NewArrivals/NewArrivals'

function App() {
  return (
    <div className="App">
        <div className="container">
            <Header/>
            <Intro/>
            <NewArrivals/>
        </div>
    </div>
  );
}

export default App;
