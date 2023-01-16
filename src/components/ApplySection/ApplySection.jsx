import React from 'react';
import classNames from 'classnames/bind';
import PromoSection from '~/components/PromoSection';
import applySectionData from '~/components/ApplySection/applySectionData';
import PropTypes from 'prop-types';
import { ACADEMIES } from '~/constants/constants';
import PathApply from '~/assets/images/Path_Apply.svg';
import ParticlesApply from '~/assets/images/Background_particles_Apply_Section.svg';
import styles from './ApplySection.module.scss';

const cn = classNames.bind(styles);

const ApplySection = ({ academy }) => {
  const dataApplicableToAllSections = {
    headingData: 'Apply to academy',
    buttonText: 'Apply now',
    isApplyPromo: true,
  };

  return (
    <section className={cn('apply-section')}>
      <PromoSection
        data={{ ...dataApplicableToAllSections, ...applySectionData[academy] }}
      >
        <figure className={cn('apply-section__img')}>
          <img src={applySectionData[academy].imagePath} alt="" />
        </figure>
        <PathApply className={cn('apply-section__path')} aria-hidden="true" />
        <ParticlesApply
          className={cn('apply-section__particles')}
          aria-hidden="true"
        />
      </PromoSection>
    </section>
  );
};

ApplySection.propTypes = {
  academy: PropTypes.oneOf(Object.values(ACADEMIES)),
};

export default ApplySection;
