import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Header from '../Header';
import Footer from '../Footer';
import styles from './Layout.module';

const cn = classNames.bind(styles);

function Layout({ children }) {
  return (
    <div className={cn('layout')}>
      <Header />
      <main className={cn('layout__main')}>{children}</main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
