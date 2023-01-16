import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { routes } from '~/routes';
import Logo_SA from '../../assets/logos/Logo_SA.svg';
import Navigation from './Navigation';
import HamburgerButton from './Hamburger/HamburgerButton';
import useMediaQuery from '../../hooks/useMediaQuery';
import styles from './Header.module';

const cn = classNames.bind(styles);

const Header = () => {
  const isMobile = useMediaQuery('(max-width: 880px)');

  const [showOverlayNav, setShowOverlayNav] = useState(false);

  function toggleOverlayNav() {
    setShowOverlayNav((prevState) => !prevState);
  }

  useEffect(() => {
    if (!isMobile) {
      setShowOverlayNav(false);
    }
  }, [isMobile]);

  useEffect(() => {
    if (showOverlayNav) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [showOverlayNav]);

  return (
    <header className={cn('header')} id="header">
      <Link
        className={cn('header__logo-wrapper')}
        to={routes.home}
        onClick={() => setShowOverlayNav(false)}
      >
        <Logo_SA className={cn('logo-icon')} alt="Sourcery Academy logo" />
        <h1 className={cn('logo-name')}>Sourcery Academy</h1>
      </Link>
      {isMobile ? (
        <>
          <HamburgerButton active={showOverlayNav} onClick={toggleOverlayNav} />
          {showOverlayNav && (
            <Navigation
              fullScreenOverlay={isMobile}
              setShowOverlayNav={setShowOverlayNav}
              toggleOverlayNav={toggleOverlayNav}
            />
          )}
        </>
      ) : (
        <Navigation
          fullScreenOverlay={isMobile}
          setShowOverlayNav={setShowOverlayNav}
        />
      )}
    </header>
  );
};

export default Header;
