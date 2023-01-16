import React from 'react';
import classNames from 'classnames/bind';
import AcademyListItem from './AcademyListItem/AcademyListItem';
import academyData from './academyData';
import styles from './AcademyList.module';

const cn = classNames.bind(styles);

function AcademyList() {
  return (
    <div id="academy-list" className={cn('academy-list')}>
      {academyData.map((data) => {
        const { type } = data;
        return <AcademyListItem key={type} academy={data} />;
      })}
    </div>
  );
}

export default AcademyList;
