import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./components/layouts/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Store from "./components/Store/Store";
import Navbar from "./components/Navbar";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/store" component={Store} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
