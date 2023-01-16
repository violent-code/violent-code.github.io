import React from 'react';
import classNames from 'classnames/bind';
import styles from './NotFound.module';

const cn = classNames.bind(styles);

function NotFound() {
  return <h1 className={cn('not-found__heading')}>NOT FOUND 404</h1>;
}

export default NotFound;
