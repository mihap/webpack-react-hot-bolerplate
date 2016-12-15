import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';


class Dashboard extends Component {
  static displayName = 'Dashboard';

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <div>
        Dashboard is here!!!!!
      </div>
    );
  }
}

export default Dashboard;
