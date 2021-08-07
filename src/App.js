import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import SingleItem from "./components/SingleItem";
import { useGlobalContext } from "./contexts/AppContext";

const App = () => {
  const { urlId } = useGlobalContext();

  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path={`/:${urlId}`}>
          <SingleItem></SingleItem>
        </Route>
        <Route path="*">
          <Error></Error>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
