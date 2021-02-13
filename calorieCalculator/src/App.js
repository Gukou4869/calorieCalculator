import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/Pages/Services";
import Products from "./components/Pages/Products";
import ContactUs from "./components/Pages/ContactUs";
import SignUp from "./components/Pages/SignUp";
import Home from "./components/Pages/Home";
import Marketing from "./components/Pages/Marketing";
import Consulting from "./components/Pages/Consulting";
import Hero from "./components/Login/hero";
import Login from "./components/Pages/Login";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" exact component={Services} />
        <Route path="/products" exact component={Products} />
        <Route path="/contact-us" exact component={ContactUs} />
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/marketing" exact component={Marketing} />
        <Route path="/consulting" exact component={Consulting} />
        <Route path="/hero" exact component={Hero} />
      </Switch>
    </Router>
  );
}

export default App;
