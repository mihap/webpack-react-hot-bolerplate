import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Dashboard from 'components/Dashboard';
import Home from 'components/Home';
import Header from 'components/Header';


import Classes from './styles';

const Application = ({ store }) => (
  <Provider store={ store }>
    <BrowserRouter>
      <span className={ Classes.root }>
        <Header />

        <Route exactly path="/" component={ Home } />
        <Route exactly path="/dashboard" component={ Dashboard } />
      </span>
    </BrowserRouter>
  </Provider>
);

Application.propTypes = {
  store:    Provider.propTypes.store // eslint-disable-line
};

export default Application;
