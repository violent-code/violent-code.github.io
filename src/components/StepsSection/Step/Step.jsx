import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind.js';
import stepsData from './stepsData.js';
import { ACADEMIES } from '/src/constants/constants.js';
import styles from './Step.module';

const cn = classNames.bind(styles);

const Step = ({ step, text, isInverted = false, academy }) => {
  const data = stepsData[step];

  const Image = data.image[academy];

  return (
    <div
      className={cn('step-container', `step-container--${step}`, {
        'step-container--inverted': isInverted,
      })}
    >
      <div
        className={cn('text-container', {
          'text-container--inverted': isInverted,
        })}
      >
        <h3
          className={cn(
            'text-container__title',
            `text-container__title--${step}`
          )}
        >
          {data.title}
        </h3>
        <p className={cn('text-container__paragraph')}>{text}</p>
      </div>
      <figure
        className={cn('image-container', {
          'image-container--inverted': isInverted,
        })}
      >
        <Image
          className={cn(
            'image-container__image',
            `image-container__image--${step}`
          )}
          alt=""
        />
      </figure>
    </div>
  );
};

Step.propTypes = {
  step: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  isInverted: PropTypes.bool,
  academy: PropTypes.oneOf(Object.values(ACADEMIES)).isRequired,
};

export default Step;
