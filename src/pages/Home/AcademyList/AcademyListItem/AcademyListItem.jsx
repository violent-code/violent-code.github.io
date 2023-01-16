import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import useMediaQuery from '/src/hooks/useMediaQuery';
import AcademySection from '../AcademySection/AcademySection';
import styles from './AcademyListItem.module';

const cn = classNames.bind(styles);

function AcademyListItem({ academy }) {
  const {
    particleSvgs: [Particles_1, Particles_2, Particles_3],
    ...rest
  } = academy;

  const isDesktop = useMediaQuery('(min-width: 880px)');
  const isKids = academy.type === 'kids';

  const renderKidsSectionParticles = () => {
    return isDesktop ? (
      <Particles_2
        className={cn(
          'academy-particles__kids-bottom',
          'academy-particles-shared'
        )}
        aria-hidden="true"
      />
    ) : (
      <Particles_3
        className={cn(
          'academy-particles__kids-bottom',
          'academy-particles-shared'
        )}
        aria-hidden="true"
      />
    );
  };

  return (
    <div className={cn('academy-item-wrapper')}>
      <div className={cn('academy-particles')}>
        <Particles_1
          className={cn(
            `academy-particles__${academy.type}-top`,
            'academy-particles-shared'
          )}
          aria-hidden="true"
        />
        {isKids ? (
          renderKidsSectionParticles()
        ) : (
          <Particles_2
            className={cn(
              `academy-particles__${academy.type}-bottom`,
              'academy-particles-shared'
            )}
            aria-hidden="true"
          />
        )}
      </div>

      <AcademySection data={rest} />
    </div>
  );
}

AcademyListItem.propTypes = {
  academy: PropTypes.shape({
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    buttonProps: PropTypes.object.isRequired,
    img: PropTypes.func.isRequired,
    svgPath: PropTypes.func,
    particleSvgs: PropTypes.arrayOf(PropTypes.func).isRequired,
    isInverted: PropTypes.bool.isRequired,
  }).isRequired,
};

export default AcademyListItem;
