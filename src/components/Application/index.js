import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './app';


const Application = ({ store }) => (
  <Provider store={ store }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

Application.propTypes = {
  store:    Provider.propTypes.store // eslint-disable-line
};

export default Application;
