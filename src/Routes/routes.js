import React from 'react';
import Home from '../screens/home'
import Users from '../screens/user'
import About from '../screens/about'
import{
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";


 class Routes extends React.Component{
     render(){
         return (
            <Switch>
            <Route path="/home">
                <Home />
            </Route>
            <Route path="/About">
                <About />
            </Route>
            <Route path="/users">
                <Users />
            </Route>
        </Switch>
      
         )
     }
     
        
 }
 
  export default Routes