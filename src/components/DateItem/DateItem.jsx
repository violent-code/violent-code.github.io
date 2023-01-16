import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Icon_location_on from '../../assets/icons/Icon_location_on.svg';
import returnDate from '../../utils/dateUtils';
import styles from './DateItem.module.scss';

const cn = classNames.bind(styles);

const DateItem = ({
  startDate,
  endDate,
  showLocationIcon,
  text,
  doubleDate,
}) => {
  const data = returnDate(startDate, endDate);

  return (
    <div className={cn('date-item')}>
      <div
        className={cn('date-item__date', {
          'date-item__date--double': doubleDate,
        })}
      >
        <div className={cn('date-container')}>
          <div className={cn('date-container__item')}>
            <div
              className={cn(
                'date-container__item',
                'date-container__item--month'
              )}
            >
              {data.startDate.month}
            </div>
            <div
              className={cn(
                'date-container__item',
                'date-container__item--day'
              )}
            >
              {data.startDate.day}
            </div>
          </div>
          {!!data.endDate && (
            <div
              className={cn(
                'date-container__item',
                'date-container__item--end-date'
              )}
            >
              <div
                className={cn(
                  'date-container__item',
                  'date-container__item--day',
                  'date-container__item--line'
                )}
              >
                {'-'}
              </div>
              <div className={cn('date-container__item')}>
                <div
                  className={cn(
                    'date-container__item',
                    'date-container__item--month'
                  )}
                >
                  {data.endDate.month}
                </div>
                <div
                  className={cn(
                    'date-container__item',
                    'date-container__item--day'
                  )}
                >
                  {data.endDate.day}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={cn('date-item__text')}>
        <div className={cn('text-container')}>
          {showLocationIcon && (
            <div>
              <Icon_location_on
                className={cn('text-container', 'text-container__icon')}
                aria-hidden="true"
              />
            </div>
          )}
          <p className={cn('text-container', 'text-container__paragraph')}>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

DateItem.propTypes = {
  startDate: PropTypes.instanceOf(Date).isRequired,
  endDate: PropTypes.instanceOf(Date),
  showLocationIcon: PropTypes.bool,
  text: PropTypes.string.isRequired,
  doubleDate: PropTypes.bool.isRequired,
};

export default DateItem;
