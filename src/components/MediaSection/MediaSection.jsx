import React, { useState, useEffect, useMemo } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import useFetch from '/src/hooks/useFetch';
import ParticlesMedia from '/src/assets/images/Background_particles_Media.svg';
import PathMedia from './PathMedia/PathMedia';
import GalleryMedia from './GalleryMedia/GalleryMedia';
import LoadingSpinner from '/src/components/LoadingSpinner/LoadingSpinner';
import { ACADEMIES } from '/src/constants/constants.js';
import styles from './MediaSection.module';

const cn = classNames.bind(styles);

const MediaSection = ({ academy }) => {
  const fetchMediaUrl = 'https://sfe-2022-data.netlify.app/static/media.json';
  const fetchMediaData = useFetch(fetchMediaUrl);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (fetchMediaData) {
      setLoading(false);
    }
  }, [fetchMediaData]);

  const data = useMemo(() => {
    switch (academy) {
      case ACADEMIES.developers:
        return fetchMediaData.filter((item) => item.academy === 'developers');
      case ACADEMIES.testers:
        return fetchMediaData.filter((item) => item.academy === 'testers');
      case ACADEMIES.frontend:
        return fetchMediaData.filter((item) => item.academy === 'frontend');
      default:
        return fetchMediaData;
    }
  }, [fetchMediaData]);

  return (
    <>
      {fetchMediaData.length > 0 && (
        <section className={cn('media-section')} id="media-section">
          <div className={cn('media-section__heading-wrapper')}>
            <h2 className={cn('media-section__heading')}>Media</h2>

            <PathMedia academy={academy} />

            <ParticlesMedia
              className={cn('media-section__particles')}
              aria-hidden="true"
            />
          </div>

          {loading ? (
            <LoadingSpinner style={{ margin: 'var(--spacer-3xl) auto 0' }} />
          ) : (
            <GalleryMedia data={data} />
          )}
        </section>
      )}
    </>
  );
};

MediaSection.propTypes = {
  academy: PropTypes.oneOf(Object.values(ACADEMIES)),
};

export default MediaSection;
