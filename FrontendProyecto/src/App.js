/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
      BrowserRouter as Router,
      Switch,
      Route,
      Redirect,
    } from "react-router-dom";
import Home from './components/MainPage';
import Tienda from './components/TiendaPage';

class App extends React.Component {
    render() {
    
        return (
                <>
                  {/* This is the alias of BrowserRouter i.e. Router */}
                  <Router>
                    <Switch>
                      {/* This route is for home component 
                      with exact path "/", in component props 
                      we passes the imported component*/}
                      <Route exact path="/" component={Home} />
                        
                      {/* This route is for about component 
                      with exact path "/about", in component 
                      props we passes the imported component*/}
                      <Route path="/tienda" component={Tienda} />
                        
                        
                      {/* If any route mismatches the upper 
                      route endpoints then, redirect triggers 
                      and redirects app to home component with to="/" */}
                      <Redirect to="/" />
                    </Switch>
                  </Router>
                </>
        )
    };
}

export default App;
