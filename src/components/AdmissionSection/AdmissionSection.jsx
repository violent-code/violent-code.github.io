import React, { useState, useEffect, useMemo } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import ParticlesAdmission from '/src/assets/images/Background_particles_Admission.svg';
import PathAdmission from '/src/assets/images/Path_Admission.svg';
import ImageAdmission from '/src/assets/images/Image_Admission.svg';
import { ACADEMIES } from '/src/constants/constants.js';
import { admissionData } from './admissionData';
import DateItem from '../DateItem/DateItem';
import styles from './AdmissionSection.module';

const cn = classNames.bind(styles);

const AdmissionSection = ({ academy }) => {
  const data = useMemo(() => {
    switch (academy) {
      case ACADEMIES.developers:
        return admissionData.developers;
      case ACADEMIES.testers:
        return admissionData.testers;
      case ACADEMIES.frontend:
        return admissionData.frontend;
      default:
        return admissionData;
    }
  }, [admissionData]);

  const isDoubleDate = data.dates.some((item) => 'endDate' in item);

  return (
    <section className={cn('admission-section')}>
      <div className={cn('admission-section__text-wrapper')}>
        <h2 className={cn('admission-section__heading')}>The Admission</h2>
        <h3 className={cn('admission-section__sub-heading')}>
          {data.introductionTitle}
        </h3>
        <p className={cn('admission-section__text')}>{data.introduction}</p>
        <h3 className={cn('admission-section__sub-heading')}>
          {data.learnTitle}
        </h3>
        <ul className={cn('admission-section__list')}>
          {data.learn.map((item, index) => (
            <li
              className={cn('admission-section__list-text')}
              key={index + item}
            >
              {item}
            </li>
          ))}
        </ul>
        <h3 className={cn('admission-section__sub-heading')}>
          {data.interviewTitle}
        </h3>
        <p className={cn('admission-section__text')}>{data.interview}</p>
      </div>

      <div className={cn('admission-section__calendar-wrapper')}>
        <h3 className={cn('admission-section__sub-heading')}>Dates</h3>

        <div className={cn('admission-section__dates-wrapper')}>
          {data.dates.map((item) => (
            <DateItem
              key={item.id}
              startDate={item.startDate}
              endDate={item?.endDate}
              text={item.text}
              doubleDate={isDoubleDate}
            />
          ))}

          <PathAdmission
            className={cn('admission-section__path')}
            aria-hidden="true"
          />
        </div>

        <ParticlesAdmission
          className={cn('admission-section__particles')}
          aria-hidden="true"
        />

        <figure className={cn('admission-section__image')}>
          <ImageAdmission alt="" aria-hidden="true" />
        </figure>
      </div>
    </section>
  );
};

AdmissionSection.propTypes = {
  academy: PropTypes.oneOf(Object.values(ACADEMIES)),
};

export default AdmissionSection;
