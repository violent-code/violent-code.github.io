import React from 'react';
import useTheme from '/src/hooks/useTheme';

function Media() {
  useTheme('purple');

  return (
    <>
      <h1 style={{ color: 'var(--primary-color)' }}>/media</h1>
    </>
  );
}

export default Media;
