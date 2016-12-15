import React from 'react';
import { BrowserRouter, Match } from 'react-router';
import { Provider } from 'react-redux';
import Dashboard from 'components/Dashboard';
import Home from 'components/Home';


const Application = ({ store }) => (
  <Provider store={ store }>
    <BrowserRouter>
      <span>
        <Match exactly pattern="/" component={ Home } />
        <Match exactly pattern="/dashboard" component={ Dashboard } />
      </span>
    </BrowserRouter>
  </Provider>
);

Application.propTypes = {
  store:    Provider.propTypes.store
};

export default Application;
