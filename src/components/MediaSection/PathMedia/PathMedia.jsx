import React from 'react';
import classNames from 'classnames/bind';
import PathMediaHome from '/src/assets/images/Path_Media_Home.svg';
import PathMediaAcademies from '/src/assets/images/Path_Media_Academies.svg';
import PropTypes from 'prop-types';
import { ACADEMIES } from '/src/constants/constants.js';
import styles from '../MediaSection.module';

const cn = classNames.bind(styles);

const PathMedia = ({ academy }) => {
  return (
    <>
      {academy ? (
        <PathMediaAcademies
          className={cn('media-section__path-academies')}
          aria-hidden="true"
        />
      ) : (
        <PathMediaHome
          className={cn('media-section__path-home')}
          aria-hidden="true"
        />
      )}
    </>
  );
};

PathMedia.propTypes = {
  academy: PropTypes.oneOf(Object.values(ACADEMIES)),
};

export default PathMedia;
