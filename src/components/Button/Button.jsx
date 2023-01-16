import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cn = classNames.bind(styles);

function Button({ children, href, to, type = 'button', onClick, ariaLabel }) {
  const outerLink = href?.includes('.');
  const innerLink = href?.includes('#');

  {
    if (outerLink) {
      return (
        <a
          href={href}
          className={cn('button')}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    } else if (innerLink) {
      return (
        <a
          href={href}
          className={cn('button')}
          target="_self"
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    } else if (to) {
      return (
        <Link
          to={to}
          className={cn('button')}
          onClick={onClick}
          aria-label={ariaLabel}
        >
          {children}
        </Link>
      );
    } else {
      return (
        <button
          type={type}
          className={cn('button')}
          onClick={onClick}
          aria-label={ariaLabel}
        >
          {children}
        </button>
      );
    }
  }
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  to: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
  ariaLabel: PropTypes.string,
};

export default Button;
