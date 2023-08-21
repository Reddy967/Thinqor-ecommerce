import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Accessories from "./components/Accessories";
import Events from "./components/Events";
import Assurance from "./components/Assurance";
import Product from "./components/Product";
import About from "./components/About";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Address from "./components/Address";
import PaymentGateway from "./components/PaymentGateway";
import {Routes, Route } from "react-router-dom";

const App = () => {
    return(
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Accessories" element={<Accessories/>} />
                <Route path="/Events" element={<Events/>} />
                <Route path="/Assurance" element={<Assurance/>} />
                <Route path="/About" element={<About/>} />
                <Route path="/Contact" element={<Contact/>} />
                <Route path="/Product" element={<Product/>} />
                <Route path="/Signup" element={<Signup/>} />
                <Route path="/Login" element={<Login/>} />
                <Route path="/Address" element={<Address/>}/>
                <Route path="/PaymentGateway" element={<PaymentGateway/>}/>
            </Routes>
        </div>
    
    )
}

export default App;
