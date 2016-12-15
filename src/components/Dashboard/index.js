import asyncComponent from 'components/AsyncComponent';

const AsyncDashboard = asyncComponent(() =>
  System.import('./Dashboard').then(module => module.default)
);

export default AsyncDashboard;
