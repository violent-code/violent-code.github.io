import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import stepsSectionData from './stepsSectionData';
import { ACADEMIES } from '/src/constants/constants.js';
import Step from './Step/Step';
import Path_Steps from '~/assets/images/Path_Steps.svg';
import Background_particles_Steps_top from '~/assets/images/Background_particles_Steps_top.svg';
import Background_particles_Steps_bottom from '~/assets/images/Background_particles_Steps_bottom.svg';
import styles from './StepsSection.module';

const cn = classNames.bind(styles);

const StepsSection = ({ academy }) => {
  const data = stepsSectionData[academy];

  return (
    <section className={cn('steps-section')}>
      <Background_particles_Steps_top
        className={cn('steps-section__particles-top')}
        aria-hidden="true"
      />
      <Path_Steps className={cn('steps-section__path')} aria-hidden="true" />
      <div className={cn('steps-section__steps-container')}>
        <Step step={1} text={data.apply} academy={academy} />
        <Step step={2} text={data.pass} isInverted={true} academy={academy} />
        <Step step={3} text={data.learn} academy={academy} />
        <Step step={4} text={data.join} isInverted={true} academy={academy} />
      </div>
      <Background_particles_Steps_bottom
        className={cn('steps-section__particles-bottom')}
        aria-hidden="true"
      />
    </section>
  );
};

StepsSection.propTypes = {
  academy: PropTypes.oneOf(Object.values(ACADEMIES)),
};

export default StepsSection;
