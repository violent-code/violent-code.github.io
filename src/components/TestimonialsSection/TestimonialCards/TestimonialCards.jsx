import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import TestimonialCard from '~/components/TestimonialsSection/TestimonialCards/TestimonialCard';
import styles from './TestimonialCards.module.scss';

const cn = classNames.bind(styles);

const TestimonialCards = ({ testimonials, handleOpenModal }) => {
  return (
    <div
      className={cn(
        'cards',
        testimonials.length > 2 ? 'cards--space-between' : 'cards--center'
      )}
    >
      {testimonials.map((testimonial) => (
        <TestimonialCard
          key={JSON.stringify(testimonial)}
          photo={testimonial.photo}
          message={testimonial.message}
          name={testimonial.name}
          academy={testimonial.academy}
          openModal={() => handleOpenModal(testimonial)}
        />
      ))}
    </div>
  );
};

TestimonialCards.propTypes = {
  testimonials: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleOpenModal: PropTypes.func.isRequired,
};

export default TestimonialCards;
