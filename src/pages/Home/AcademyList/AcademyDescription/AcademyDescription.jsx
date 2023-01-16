import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from '/src/components/Button';
import styles from './AcademyDescription.module';

const cn = classNames.bind(styles);

const AcademyDescription = function AcademyDescription({
  title,
  paragraph,
  buttonProps,
  isInverted,
  isDesktop,
}) {
  return (
    <div
      className={cn('academy', {
        'academy--inverted': isDesktop && isInverted,
      })}
    >
      <h3 className={cn('academy__title')}>{title}</h3>
      <p className={cn('academy__text')}>{paragraph}</p>
      <div className={cn({ academy__link: isDesktop && isInverted })}>
        <Button {...buttonProps}>Learn more</Button>
      </div>
    </div>
  );
};

AcademyDescription.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  buttonProps: PropTypes.object,
  isInverted: PropTypes.bool,
  isDesktop: PropTypes.bool,
};

export default AcademyDescription;
