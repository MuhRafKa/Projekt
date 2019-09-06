import React from 'react';
import './App.css';
import {withRouter, Route, Switch} from 'react-router-dom';
import Navbar from './1.pages/Navbar/Navbar';
import Home from './1.pages/Home/Home';
import Auth from './1.pages/Auth/Auth';
import Database from './1.pages/Database/Database';
import Player from './2.components/General/Player';
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    <div className="App">
        <Navbar/>
        <Switch>
          <Route component={Home} path='/' exact />
          <Route component={Auth} path='/auth' exact />
          <Route component={Database} path='/database' exact />
          <Route component={Player} path='/player' exact />
        </Switch>  
    </div>
  );
}

export default connect()(withRouter(App))