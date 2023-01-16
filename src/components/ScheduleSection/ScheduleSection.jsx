import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { ACADEMIES } from '/src/constants/constants.js';
import { scheduleSectionsData } from './scheduleSectionsData';
import ExpandableCard from './ExpandableCard/ExpandableCard';

const ScheduleSection = ({ academy }) => {
  const data = useMemo(() => {
    switch (academy) {
      case ACADEMIES.developers:
        return scheduleSectionsData.developers.lectures;
      case ACADEMIES.testers:
        return scheduleSectionsData.testers.lectures;
      case ACADEMIES.frontend:
        return scheduleSectionsData.frontend.lectures;
      default:
        return null;
    }
  }, [scheduleSectionsData]);

  return (
    <>
      {data &&
        data.map((lecture) => (
          <ExpandableCard lecture={lecture} key={lecture.id} />
        ))}
    </>
  );
};

ScheduleSection.propTypes = {
  academy: PropTypes.oneOf(Object.values(ACADEMIES)),
};

export default ScheduleSection;
