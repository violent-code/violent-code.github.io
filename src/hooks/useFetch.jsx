import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const fetchResponse = await fetch(url);
      const fetchData = await fetchResponse.json();
      setData(fetchData);
    } catch (error) {
      // TODO: more complete error handling will be implemented with ticket SR22S-65
      console.error(error);
    }
  };

  return data;
}

useFetch.propTypes = {
  url: PropTypes.string.isRequired,
};

export default useFetch;
