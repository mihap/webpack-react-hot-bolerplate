import React from 'react';
import { render } from 'react-dom';

import store from 'config/createStore';
import Application from 'components/Application';


render(
  <Application store={ store } />,
  document.getElementById('root')
);
