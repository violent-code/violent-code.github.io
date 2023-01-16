import React, { useEffect, useMemo, useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import useTheme from '~/hooks/useTheme';
import useBreakpointKey from '~/hooks/useBreakpointKey';
import BackgroundParticles from '~/assets/images/Background_particles_Testimonials.svg';
import TestimonialsCarousel from '~/components/TestimonialsSection/TestimonialsCarousel';
import TestimonialModal from '~/components/TestimonialsSection/TestimonialModal';
import TestimonialCards from '~/components/TestimonialsSection/TestimonialCards';
import styles from './TestimonialsSection.module.scss';
import useFetch from '~/hooks/useFetch';
import { ACADEMIES } from '~/constants/constants';

const cn = classNames.bind(styles);

const TESTIMONIALS_ENDPOINT =
  'https://raw.githubusercontent.com/aistegerd/testimonials-mock-data/main/testimonials.json';
const MAX_NUMBER_OF_TESTIMONIALS_TO_DISPLAY = 10;
const NUMBER_OF_TESTIMONIALS_TO_DISPLAY = {
  'mobile-only': 1,
  'tablet-portrait': 1,
  'tablet-landscape': 2,
  desktop: 3,
  'big-desktop': 3,
  'big-desktop-up': 3,
};

const TestimonialsSection = ({ academy }) => {
  useTheme();
  const breakpointKey = useBreakpointKey();
  const testimonialsData = useFetch(TESTIMONIALS_ENDPOINT);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [
    numberOfTestimonialsToDisplay,
    setNumberOfTestimonialsToDisplay,
  ] = useState(3);

  const testimonials = useMemo(() => {
    switch (academy) {
      case ACADEMIES.developers:
        return testimonialsData.filter(
          (item) => item.academy === 'Sourcery for Developers Graduate'
        );
      case ACADEMIES.testers:
        return testimonialsData.filter(
          (item) => item.academy === 'Sourcery for Testers Graduate'
        );
      case ACADEMIES.frontend:
        return testimonialsData.filter(
          (item) => item.academy === 'Sourcery for Front-End Graduate'
        );
      default:
        return testimonialsData;
    }
  }, [testimonialsData]);

  const firstXAcademyTestimonials = testimonials.slice(
    0,
    MAX_NUMBER_OF_TESTIMONIALS_TO_DISPLAY
  );

  useEffect(() => {
    setNumberOfTestimonialsToDisplay(
      Math.min(
        NUMBER_OF_TESTIMONIALS_TO_DISPLAY[breakpointKey],
        MAX_NUMBER_OF_TESTIMONIALS_TO_DISPLAY
      )
    );
  }, [breakpointKey]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isModalOpen]);

  const handleOpenModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (!testimonials.length) {
    return null;
  }

  return (
    <section className={cn('testimonials-section')}>
      <h2 className={cn('testimonials-section__heading')}>Testimonials</h2>
      {firstXAcademyTestimonials.length > numberOfTestimonialsToDisplay ? (
        <TestimonialsCarousel
          testimonials={firstXAcademyTestimonials}
          numberOfTestimonialsToDisplay={numberOfTestimonialsToDisplay}
          handleOpenModal={handleOpenModal}
        />
      ) : (
        <TestimonialCards
          testimonials={firstXAcademyTestimonials}
          handleOpenModal={handleOpenModal}
        />
      )}
      {isModalOpen && selectedTestimonial && (
        <TestimonialModal
          photo={selectedTestimonial.photo}
          message={selectedTestimonial.message}
          name={selectedTestimonial.name}
          academy={selectedTestimonial.academy}
          closeModal={handleCloseModal}
        />
      )}
      <BackgroundParticles aria-hidden="true" />
    </section>
  );
};

TestimonialsSection.propTypes = {
  academy: PropTypes.oneOf(Object.values(ACADEMIES)),
};

export default TestimonialsSection;
