import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from 'components/Dashboard';
import Home from 'components/Home';
import Header from 'components/Header';


import Classes from './styles';


const App = () => (
  <div className={ Classes.root }>
    <Header />

    <Route exact path="/" component={ Home } />
    <Route exact path="/dashboard" component={ Dashboard } />
  </div>
);

export default App;
