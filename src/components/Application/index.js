import React from 'react';
import { BrowserRouter, Match } from 'react-router';
import { Provider } from 'react-redux';
import Dashboard from 'components/Dashboard';


const Application = ({ store }) => (
  <Provider store={ store }>
    <BrowserRouter>
      <Match exactly pattern="/dashboard" component={ Dashboard } />
    </BrowserRouter>
  </Provider>
);

Application.propTypes = {
  store:    Provider.propTypes.store
};

export default Application;
