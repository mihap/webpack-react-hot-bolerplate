import asyncComponent from 'components/AsyncComponent';

const AsyncDashboard = asyncComponent(() =>
  import(/* webpackChunkName: "dashboard" */ './Dashboard').then(module => module.default)
);

export default AsyncDashboard;
