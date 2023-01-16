import React from 'react';
import classNames from 'classnames/bind';
import PromoSection from '/src/components/PromoSection';
import promoHomeData from './promoHomeData';
import Image_Promo from '~/assets/images/Image_Promo.svg';
import styles from './PromoHome.module';

const cn = classNames.bind(styles);

function PromoHome() {
  return (
    <PromoSection data={promoHomeData}>
      <figure className={cn('promo-home__img')}>
        <Image_Promo aria-hidden="true" />
      </figure>
    </PromoSection>
  );
}

export default PromoHome;
