import React from 'react';
import { NavLink } from 'react-router-dom';
import Classes from './styles';

const links = [
  { to: '/', children: 'Home' },
  { to: '/dashboard', children: 'Dashboard' }
];

const Header = () => (
  <div className={ Classes.root }>
    { links.map((props, i) => (
      <NavLink
        key={ i }
        activeClassName={ Classes.active }
        exact
        { ...props }
      />
    ))}
  </div>
);

export default Header;

