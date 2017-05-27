import React from 'react';

const asyncComponent = (getComponent) =>
  class AsyncComponent extends React.Component {
    state = { Component: AsyncComponent.Component };

    componentWillMount() {
      if (!this.state.Component) {
        getComponent().then(Component => {
          this.setState({ Component });
        });
      }
    }
    render() {
      const { Component } = this.state;
      if (Component) {
        return <Component { ...this.props } />;
      }
      return null;
    }
  };

export default asyncComponent;
