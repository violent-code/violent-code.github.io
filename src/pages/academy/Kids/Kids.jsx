import React from 'react';
import useTheme from '/src/hooks/useTheme';

function Kids() {
  useTheme('kids');

  return (
    <>
      <h1 style={{ color: 'var(--primary-color)' }}>/academy/kids</h1>
    </>
  );
}

export default Kids;
