const returnDate = (startDate, endDate) => {
  const result = {
    startDate: {
      day: startDate.getDate(),
      month: startDate.toLocaleString('en-GB', { month: 'short' }),
    },
  };
  if (endDate) {
    result.endDate = {
      day: endDate.getDate(),
      month: endDate.toLocaleString('en-GB', { month: 'short' }),
    };
  }
  return result;
};

export default returnDate;
