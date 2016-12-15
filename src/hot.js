import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import store from 'config/createStore';
import Application from 'components/Application';


const hotRender = () => {
  render(
    <AppContainer>
      <Application store={ store } />
    </AppContainer>,
    document.getElementById('root')
  );
};

hotRender();

module.hot.accept('components/Application', hotRender);
