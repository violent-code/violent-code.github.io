import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './LoadingSpinner.module.scss';

const cn = classNames.bind(styles);

const LoadingSpinner = ({ style }) => {
  return <div className={cn('loading-spinner')} style={style}></div>;
};

LoadingSpinner.propTypes = {
  style: PropTypes.string,
};

export default LoadingSpinner;
