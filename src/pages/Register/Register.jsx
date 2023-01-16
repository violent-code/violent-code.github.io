import React from 'react';
import useTheme from '/src/hooks/useTheme';

function Register() {
  useTheme('purple');

  return (
    <>
      <h1 style={{ color: 'var(--primary-color)' }}>/register</h1>
    </>
  );
}

export default Register;
