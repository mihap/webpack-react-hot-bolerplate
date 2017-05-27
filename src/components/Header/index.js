import React from 'react';
import { Link } from 'react-router-dom';
import Classes from './styles';

const links = [
  { to: '/', children: 'Home' },
  { to: '/dashboard', children: 'Dashboard' }
];

const Header = () => (
  <div className={ Classes.root }>
    { links.map((props, i) =>
      <Link
        key={ i }
        activeClassName={ Classes.active }
        activeOnlyWhenExact
        { ...props }
      />
    )}
  </div>
);

export default Header;

