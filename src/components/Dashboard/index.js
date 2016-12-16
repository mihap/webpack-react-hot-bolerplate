import asyncComponent from 'components/AsyncComponent';

const AsyncDashboard = asyncComponent(() =>
  import('./Dashboard').then(module => module.default)
);

export default AsyncDashboard;
