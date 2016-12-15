import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';


class Home extends Component {
  static displayName = 'Home';

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <div>
        Home Page
      </div>
    );
  }
}

export default Home;

