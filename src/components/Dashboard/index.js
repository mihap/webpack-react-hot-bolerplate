import asyncComponent from 'components/AsyncComponent';

const AsyncDashboard = asyncComponent(() =>
  import(/* webpackChunkName: "Dashboard" */ './Dashboard').then(module => module.default)
);

export default AsyncDashboard;
