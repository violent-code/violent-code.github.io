import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from '../NavigationLink/NavigationLink.module';

const cn = classNames.bind(styles);

function NavigationLink({ to, children, onClick }) {
  return (
    <li>
      <NavLink
        className={({ isActive }) =>
          cn('nav-link', { 'nav-link--active': isActive })
        }
        to={to}
        onClick={onClick}
      >
        {children}
      </NavLink>
    </li>
  );
}

NavigationLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default NavigationLink;
