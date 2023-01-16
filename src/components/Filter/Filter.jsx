import React, { useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Filter.module';

const cn = classNames.bind(styles);

const Filter = ({ data, onClick }) => {
  if (!data) {
    return null;
  }
  const [activeItem, setActiveItem] = useState(data[0]);

  const handleItemClick = (item) => {
    setActiveItem(item);
    onClick && onClick(item);
  };

  return (
    <div className={cn('filter-wrapper')}>
      {data.map((item, index) => (
        <button
          key={index + item}
          onClick={() => handleItemClick(item)}
          className={cn('button', { 'button--active': activeItem === item })}
          type="button"
        >
          {item}
        </button>
      ))}
    </div>
  );
};

Filter.propTypes = {
  data: PropTypes.array,
  onClick: PropTypes.func,
};

export default Filter;
