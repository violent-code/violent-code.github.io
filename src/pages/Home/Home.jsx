import React from 'react';
import classNames from 'classnames/bind';
import AcademyList from './AcademyList';
import useTheme from '../../hooks/useTheme';
import PromoHome from './PromoHome';
import AcademiesSection from './AcademiesSection';
import TestimonialsSection from '~/components/TestimonialsSection';
import MediaSection from '/src/components/MediaSection';
import styles from './Home.module';

const cn = classNames.bind(styles);

const Home = () => {
  useTheme();

  return (
    <>
      <PromoHome />
      <AcademiesSection />
      <div className={cn('academy-list-wrapper')}>
        <AcademyList />
      </div>
      <div className={cn('testimonials-section-wrapper')}>
        <TestimonialsSection />
      </div>
      <div className={cn('media-section-wrapper')}>
        <MediaSection />
      </div>
    </>
  );
};

export default Home;
