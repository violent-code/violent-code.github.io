import { useEffect } from 'react';
import PropTypes from 'prop-types';

function useTheme(theme = 'purple') {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', `${theme}`);

    return () => {
      document.documentElement.removeAttribute('data-theme');
    };
  }, [theme]);
}

useTheme.propTypes = {
  theme: PropTypes.oneOf(['purple', 'blue', 'green', 'red', 'kids']),
};

export default useTheme;
