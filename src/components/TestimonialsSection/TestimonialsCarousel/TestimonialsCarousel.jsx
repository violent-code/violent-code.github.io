import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconArrow from '~/assets/icons/Icon_arrow_down.svg';
import TestimonialCards from '~/components/TestimonialsSection/TestimonialCards';
import styles from './TestimonialsCarousel.module.scss';

const cn = classNames.bind(styles);

const TestimonialsCarousel = ({
  testimonials,
  numberOfTestimonialsToDisplay,
  handleOpenModal,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const shouldShowPrevArrow = currentIndex > 0;
  const shouldShowNextArrow =
    currentIndex + numberOfTestimonialsToDisplay < testimonials.length;

  const testimonialsRow = testimonials.slice(
    currentIndex,
    currentIndex + numberOfTestimonialsToDisplay
  );

  const handlePrevArrowClick = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const handleNextArrowClick = () => {
    setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    setCurrentIndex(0);
  }, [testimonials]);

  return (
    <div className={cn('carousel')}>
      {shouldShowPrevArrow && (
        <div
          className={cn('carousel__nav', 'carousel__nav-prev')}
          onClick={handlePrevArrowClick}
          tabIndex={0}
          role="button"
          aria-label="previous"
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              handlePrevArrowClick();
            }
          }}
        >
          <IconArrow alt="previous" />
        </div>
      )}
      <TestimonialCards
        testimonials={testimonialsRow}
        handleOpenModal={handleOpenModal}
      />
      {shouldShowNextArrow && (
        <div
          className={cn('carousel__nav', 'carousel__nav-next')}
          tabIndex={0}
          role="button"
          aria-label="next"
          onClick={handleNextArrowClick}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              handleNextArrowClick();
            }
          }}
        >
          <IconArrow alt="next" />
        </div>
      )}
    </div>
  );
};

TestimonialsCarousel.propTypes = {
  testimonials: PropTypes.arrayOf(PropTypes.object).isRequired,
  numberOfTestimonialsToDisplay: PropTypes.number.isRequired,
  handleOpenModal: PropTypes.func.isRequired,
};

export default TestimonialsCarousel;
