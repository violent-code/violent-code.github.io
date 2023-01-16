import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Icon_close_x from '../../../assets/icons/Icon_close_x.svg';
import Icon_open from '../../../assets/icons/Icon_open.svg';
import styles from './HamburgerButton.module';

const cn = classNames.bind(styles);

const HamburgerButton = ({ active, onClick }) => {
  const icon = active ? <Icon_close_x /> : <Icon_open />;

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        active && onClick();
      }
    },
    [active, onClick]
  );

  return (
    <button
      onKeyDown={handleKeyDown}
      onClick={onClick}
      className={cn('hamburger')}
    >
      {icon}
    </button>
  );
};

HamburgerButton.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default HamburgerButton;
