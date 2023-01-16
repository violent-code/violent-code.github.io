import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Icon_arrow_down from '../../../assets/icons/Icon_arrow_down.svg';
import Icon_arrow_up from '../../../assets/icons/Icon_arrow_up.svg';
import NavigationLink from '../NavigationLink';
import NavDropdown from '../NavDropdown';
import { routes } from '../../../routes/routeConfig';
import styles from './Navigation.module';

const cn = classNames.bind(styles);

const Navigation = ({ fullScreenOverlay, setShowOverlayNav }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isAcademyPageOpen = useLocation().pathname.startsWith('/academy');

  const dropdownRef = useRef();
  const academiesRef = useRef();

  useEffect(() => {
    const handleCloseDropdown = (event) => {
      if (
        !dropdownRef?.current?.contains(event.target) &&
        !academiesRef?.current?.contains(event.target)
      )
        setIsOpen(false);
    };

    document.addEventListener('mousedown', handleCloseDropdown);
    document.addEventListener('keyup', handleCloseDropdown);

    return () => {
      document.removeEventListener('mousedown', handleCloseDropdown);
      document.removeEventListener('keyup', handleCloseDropdown);
    };
  }, []);

  return (
    <nav
      className={cn('nav', {
        'nav-overlay': fullScreenOverlay,
      })}
    >
      <ul
        className={cn('nav__list', {
          'nav-list-overlay': fullScreenOverlay,
        })}
      >
        <NavigationLink
          to={routes.aboutUs}
          onClick={() => setShowOverlayNav(false)}
        >
          About us
        </NavigationLink>
        <li className={cn('dropdown-list')}>
          <button
            className={cn('nav__button', 'nav__link', {
              'nav__link--active': isAcademyPageOpen,
            })}
            onClick={() => setIsOpen((prevState) => !prevState)}
            ref={academiesRef}
          >
            Academies
            {isOpen ? (
              <Icon_arrow_up className={cn('dropdown-icon')} />
            ) : (
              <Icon_arrow_down className={cn('dropdown-icon')} />
            )}
          </button>
          {isOpen && (
            <NavDropdown
              ref={dropdownRef}
              fullScreenOverlay={fullScreenOverlay}
              setIsOpen={setIsOpen}
              setShowOverlayNav={setShowOverlayNav}
            />
          )}
        </li>
        <NavigationLink
          to={routes.media}
          onClick={() => setShowOverlayNav(false)}
        >
          Media
        </NavigationLink>
        <NavigationLink
          to={routes.register}
          onClick={() => setShowOverlayNav(false)}
        >
          Register
        </NavigationLink>
        <NavigationLink
          to={routes.questions}
          onClick={() => setShowOverlayNav(false)}
        >
          Questions
        </NavigationLink>
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  fullScreenOverlay: PropTypes.bool.isRequired,
  setShowOverlayNav: PropTypes.func.isRequired,
};

export default Navigation;
