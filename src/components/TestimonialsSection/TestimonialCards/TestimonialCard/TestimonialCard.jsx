import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import truncate from 'lodash/truncate';
import Card from '~/components/Card';
import QuotationBefore from '~/assets/icons/Icon_quotation_before.svg';
import QuotationAfter from '~/assets/icons/Icon_quotation_after.svg';
import styles from './TestimonialCard.module.scss';

const cn = classNames.bind(styles);

const MAX_TESTIMONIALS_MESSAGE_LENGTH = 330;

const TestimonialCard = ({ photo, message, name, academy, openModal }) => {
  const shortenedMessage = truncate(message, {
    length: MAX_TESTIMONIALS_MESSAGE_LENGTH,
    separator: /,?\.* +/,
  });

  return (
    <Card>
      <div className={cn('testimonial')}>
        <img className={cn('testimonial__photo')} src={photo} alt={name} />
        <figure
          className={cn(
            'testimonial__quotation',
            'testimonial__quotation--before'
          )}
        >
          <QuotationBefore alt="" />
        </figure>
        <div className={cn('testimonial__message')}>
          {message.length > MAX_TESTIMONIALS_MESSAGE_LENGTH ? (
            <>
              {`${shortenedMessage}  `}
              <button
                className={cn('testimonial__read-more')}
                onClick={openModal}
              >
                Read more
              </button>
            </>
          ) : (
            <>{message}</>
          )}
        </div>
        <figure
          className={cn(
            'testimonial__quotation',
            'testimonial__quotation--after'
          )}
        >
          <QuotationAfter alt="" />
        </figure>
        <div className={cn('testimonial__graduate-info')}>
          <h3 className={cn('testimonial__graduate-name')}>{name}</h3>
          <h3 className={cn('testimonial__academy')}>{academy}</h3>
        </div>
      </div>
    </Card>
  );
};

TestimonialCard.propTypes = {
  photo: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  academy: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default TestimonialCard;
