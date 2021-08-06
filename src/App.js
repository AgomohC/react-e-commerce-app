import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
    </>
  );
};

export default App;
