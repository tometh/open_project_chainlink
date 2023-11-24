import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const MonthWidget = () => {
  const [currentMonth, setCurrentMonth] = useState(0);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const handleNextMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
  };

  const handlePrevMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
  };

  return (
    <div className="flex items-center">
      <button
        onClick={handlePrevMonth}
        className="transition duration-300 ease-in-out hover:text-blue-500 focus:outline-none"
        style={{
          transitionProperty: 'color',
          transitionDuration: '300ms',
          transitionTimingFunction: 'ease-in-out',
        }}
      >
        <FaArrowLeft />
      </button>
      &nbsp;
      <span>{months[currentMonth]}</span>
      &nbsp;
      <button
        onClick={handleNextMonth}
        className="transition duration-300 ease-in-out hover:text-blue-500 focus:outline-none"
        style={{
          transitionProperty: 'color',
          transitionDuration: '300ms',
          transitionTimingFunction: 'ease-in-out'
        }}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default MonthWidget;
