import React from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import Logo_Twitter from '../../assets/logos/Logo_Twitter.svg';
import Logo_Facebook from '../../assets/logos/Logo_Facebook.svg';
import Logo_Instagram from '../../assets/logos/Logo_Instagram.svg';

const cn = classNames.bind(styles);

const today = new Date();
const year = today.getFullYear();

const Footer = () => {
  return (
    <footer className={cn('footer-wrapper')}>
      <div className={cn('icons-wrapper')}>
        <div className={cn('icon-box')}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/devbridge"
            className={cn('icon-eclipse')}
          >
            <Logo_Facebook
              alt="Devbridge Facebook page"
              className={cn('image')}
            />
          </a>
        </div>
        <div className={cn('icon-box')}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/devbridge"
            className={cn('icon-eclipse')}
          >
            <Logo_Twitter
              alt="Devbridge Twitter page"
              className={cn('image', 'twitter')}
            />
          </a>
        </div>
        <div className={cn('icon-box')}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/devbridge/"
            className={cn('icon-eclipse')}
          >
            <Logo_Instagram
              alt="Devbridge Instagram page"
              className={cn('image')}
            />
          </a>
        </div>
      </div>
      <div className={cn('text')}> Copyright © {year} Sourcery Academy </div>
    </footer>
  );
};

export default Footer;
