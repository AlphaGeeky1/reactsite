import React from 'react';
import {Route,Switch} from "react-router-dom"
import Navbar from "./Components/navbar"
import Home from "./Components/Home"
import About from "./Components/About"
import Courses from "./Components/Courses"
import Register from "./Components/Register"
import Footer from "./Components/footer"



const App = () => {
   
    return (
        <>
        <Navbar/>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/courses" component={Courses}/>
        <Route exact path="/register" component={Register}/>
        </Switch>
        <Footer/>
            
        </>
    )
}

export default App
