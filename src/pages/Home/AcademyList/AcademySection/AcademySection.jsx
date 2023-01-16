import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import useMediaQuery from '/src/hooks/useMediaQuery';
import AcademyDescription from '../AcademyDescription';
import styles from './AcademySection.module';

const cn = classNames.bind(styles);

function AcademySection({ data }) {
  const isDesktop = useMediaQuery('(min-width: 881px)');

  const {
    type,
    title,
    paragraph,
    buttonProps,
    img: Img,
    svgPath: SvgPath,
    isInverted,
  } = data;

  const invertedClassName =
    isDesktop && isInverted && `academy-section__${type}--inverted`;

  return (
    <section>
      <div
        className={cn('academy', `academy--${type}`, {
          'academy-inverted': isDesktop && isInverted,
        })}
      >
        <div className={cn(`${type}__description`, 'description-shared')}>
          <AcademyDescription
            title={title}
            paragraph={paragraph}
            isInverted={isInverted}
            buttonProps={buttonProps}
            isDesktop={isDesktop}
          />
        </div>

        <div className={cn(`${type}__section-images`, 'section-images-shared')}>
          {SvgPath && isDesktop && (
            <SvgPath
              className={cn('section-images__path')}
              aria-hidden="true"
            />
          )}
          <Img
            className={cn('section-images__illustration')}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}

AcademySection.propTypes = {
  data: PropTypes.shape({
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    buttonProps: PropTypes.object.isRequired,
    img: PropTypes.func.isRequired,
    svgPath: PropTypes.func,
    isInverted: PropTypes.bool.isRequired,
  }).isRequired,
};

export default AcademySection;
