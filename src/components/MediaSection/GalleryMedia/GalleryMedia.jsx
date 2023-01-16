import React from 'react';
import classNames from 'classnames/bind';
import Icon_play from '/src/assets/icons/Icon_play.svg';
import PropTypes from 'prop-types';
import styles from './GalleryMedia.module';

const cn = classNames.bind(styles);

const GalleryMedia = ({ data }) => {
  const maxMediaItems = Math.min(data.length, 6);

  return (
    <div
      className={cn(
        'gallery',
        `${
          maxMediaItems === 1
            ? 'gallery--' + maxMediaItems + '-item'
            : maxMediaItems !== 6
            ? 'gallery--' + maxMediaItems + '-items'
            : ''
        }`
      )}
    >
      {data.slice(0, maxMediaItems).map((item, index) =>
        item.type === 'image' ? (
          <figure
            className={cn('media-container', `media-container-${index + 1}`)}
            key={index}
          >
            <img
              className={cn('media-item', `image-${index + 1}`)}
              src={item.thumbnail}
              alt="Sourcery academy gallery image"
            />
          </figure>
        ) : (
          <figure
            className={cn('media-container', `media-container-${index + 1}`)}
            key={index}
          >
            <video
              className={cn('media-item', `video-${index + 1}`)}
              width="auto"
              height="218"
              poster={item.thumbnail}
            >
              <source
                src={item.src}
                type={'video/' + item.src.split('.').pop()}
              />
              <p>
                Your browser doesn&quot;t support HTML video. Here is a{' '}
                <a href={item.src}>link to the video</a> instead.
              </p>
            </video>
            <div className={cn('video-controls')}>
              <button type="button" className={cn('play-button')}>
                <Icon_play />
              </button>
            </div>
          </figure>
        )
      )}
    </div>
  );
};

GalleryMedia.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default GalleryMedia;
