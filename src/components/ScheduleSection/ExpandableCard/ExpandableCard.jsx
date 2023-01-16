import React, { useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Icon_arrow_down from '/src/assets/icons/Icon_arrow_down.svg';
import Icon_arrow_up from '/src/assets/icons/Icon_arrow_up.svg';
import Icon_person from '/src/assets/icons/Icon_person.svg';
import Icon_clock from '/src/assets/icons/Icon_clock.svg';
import DateItem from '../../DateItem/DateItem';
import styles from './ExpandableCard.module.scss';

const cn = classNames.bind(styles);

const ExpandableCard = ({ lecture }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const vilnius = lecture.schedule.find((city) => city.location === 'Vilnius');
  const kaunas = lecture.schedule.find((city) => city.location === 'Kaunas');
  const isDoubleDate = lecture.schedule.some((item) => 'endDate' in item);

  return (
    <>
      <div className={cn('expandable-card')}>
        <div
          className={cn('expandable-card__header')}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className={cn('expandable-card__title')}>
            <h4 className={cn('title')}>{lecture.title}</h4>

            <button
              className={cn('button')}
              aria-label={
                isExpanded ? 'close expandable card' : 'open expandable card'
              }
              aria-controls="title-expanded"
              aria-expanded={isExpanded ? 'true' : 'false'}
            >
              {isExpanded ? (
                <Icon_arrow_up className={cn('button-icon')} />
              ) : (
                <Icon_arrow_down className={cn('button-icon')} />
              )}
            </button>
          </div>

          {isExpanded && (
            <div
              className={cn('expandable-card__title-expanded')}
              id="title-expanded"
              aria-hidden="false"
            >
              {lecture.lecturer && (
                <div className={cn('lectors')}>
                  <Icon_person className={cn('icon')} aria-hidden="true" />
                  {lecture.lecturer}
                </div>
              )}

              <div className={cn('time')}>
                <Icon_clock className={cn('icon')} aria-hidden="true" />

                {lecture.time && (
                  <span className={cn('hour')}>{lecture.time}</span>
                )}

                {lecture.duration && (
                  <span className={cn('duration')}>
                    {lecture.duration > 1
                      ? `${lecture.duration} hours`
                      : `${lecture.duration} hour`}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        {isExpanded && (
          <div className={cn('expandable-card__body')}>
            <DateItem
              startDate={vilnius.startDate}
              text={vilnius.location}
              showLocationIcon
              doubleDate={isDoubleDate}
            />

            <DateItem
              startDate={kaunas.startDate}
              text={kaunas.location}
              showLocationIcon
              doubleDate={isDoubleDate}
            />
          </div>
        )}
      </div>
    </>
  );
};

ExpandableCard.propTypes = {
  lecture: PropTypes.object,
};

export default ExpandableCard;
