import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { routes } from '../../../routes/routeConfig';
import styles from './NavDropdown.module';

const cn = classNames.bind(styles);

const NavDropdown = forwardRef(function NavDropdown(
  { fullScreenOverlay, setIsOpen, setShowOverlayNav },
  ref
) {
  const dropdownItems = [
    {
      text: 'Sourcery for Developers',
      routePath: routes.developers,
      id: 'developers',
    },
    {
      text: 'Sourcery for Testers',
      routePath: routes.testers,
      id: 'testers',
    },
    {
      text: 'Sourcery for Front-End',
      routePath: routes.frontEnd,
      id: 'frontEnd',
    },
    {
      text: 'Sourcery for Kids',
      routePath: routes.kids,
      id: 'kids',
    },
  ];

  return (
    <div
      className={cn('dropdown-wrapper', {
        'dropdown-wrapper-overlay': fullScreenOverlay,
      })}
      ref={ref}
    >
      <ul className={cn('dropdown__list')}>
        {dropdownItems.map((item) => (
          <li className={cn('dropdown__list-item')} key={item.id}>
            <Link
              className={cn('dropdown__link')}
              to={item.routePath}
              onClick={() => {
                setIsOpen((prevState) => !prevState);
                setShowOverlayNav(false);
              }}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
});

NavDropdown.propTypes = {
  fullScreenOverlay: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  setShowOverlayNav: PropTypes.func.isRequired,
};

export default NavDropdown;
