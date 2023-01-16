import React from 'react';
import useTheme from '/src/hooks/useTheme';

function AboutUs() {
  useTheme('purple');

  return (
    <>
      <h1 style={{ color: 'var(--primary-color)' }}>/about-us</h1>
    </>
  );
}

export default AboutUs;
