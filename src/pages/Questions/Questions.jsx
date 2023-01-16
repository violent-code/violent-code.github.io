import React from 'react';
import useTheme from '/src/hooks/useTheme';

function Questions() {
  useTheme('purple');

  return (
    <>
      <h1 style={{ color: 'var(--primary-color)' }}>/questions</h1>
    </>
  );
}

export default Questions;
