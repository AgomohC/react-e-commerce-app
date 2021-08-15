import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import SingleItem from "./components/SingleItem";

const App = () => {
  return (
    <Router>
      <Navbar></Navbar>

      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/item/:id" children={<SingleItem />}></Route>
        <Route exact path="/cart">
          <Cart></Cart>
        </Route>
        <Route exact path="/checkout">
          <Checkout></Checkout>
        </Route>
        <Route path="*">
          <Error></Error>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
