import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from '../Button';
import styles from './PromoSection.module';

const cn = classNames.bind(styles);

function PromoSection({ data, children }) {
  const {
    headingData,
    paragraphData,
    isApplyPromo,
    buttonText,
    buttonProps,
  } = data;

  const heading = isApplyPromo ? (
    <h2 className={cn('promo-text__heading')}>{headingData}</h2>
  ) : (
    <h1 className={cn('promo-text__heading')}>{headingData}</h1>
  );

  return (
    <section className={cn('promo-section')}>
      <div className={cn('promo-text')}>
        {heading}
        <p
          className={cn('promo-text__paragraph', {
            'promo-text__paragraph--apply': isApplyPromo,
          })}
        >
          {paragraphData}
        </p>
        <Button {...buttonProps}>{buttonText}</Button>
      </div>
      {children}
    </section>
  );
}

PromoSection.propTypes = {
  data: PropTypes.shape({
    headingData: PropTypes.string.isRequired,
    paragraphData: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    buttonProps: PropTypes.object.isRequired,
    isApplyPromo: PropTypes.bool.isRequired,
  }).isRequired,
  children: PropTypes.node,
};

export default PromoSection;
