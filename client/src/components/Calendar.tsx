import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const getCurrentWeekDays = () => {
  const currentDate = new Date();
  const currentDay = currentDate.getDay(); // 0 (Sunday) to 6 (Saturday)

  // Calculate the date of the previous Sunday
  const previousSunday = new Date(currentDate);
  previousSunday.setDate(currentDate.getDate() - currentDay);

  // Create an array to store the days of the week
  const weekDays = [];

  // Add the next 7 days to the array
  for (let i = 0; i < 7; i++) {
    const day = new Date(previousSunday);
    day.setDate(previousSunday.getDate() + i);
    weekDays.push(day);
  }

  return weekDays;
};

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const weekDays = getCurrentWeekDays();

  useEffect(() => {
    // Function to update the current date
    const updateDate = () => {
      setCurrentDate(new Date());
    };
    updateDate();
  }, []);

  const formattedDate = currentDate.toLocaleString("en-US", {
    month: "short",
    year: "numeric",
  });

  console.log(weekDays);

  return (
    <>
      <div className="d-flex flex-row px-2 justify-content-between mb-2">
        <div>
          <FaArrowLeft />
        </div>
        <div className="fs-6">{formattedDate}</div>
        <div>
          <FaArrowRight />
        </div>
      </div>
      <div className="d-flex flex-row justify-content-between px-2 pb-4">
        <div className="d-flex flex-column date">
          <p>SUN</p>
          <p className="text-center bg-primary rounded-5 round">
            {weekDays[0].getDate()}
          </p>
        </div>
        <div className="d-flex flex-column date">
          <p>MON</p>
          <p className="text-center">{weekDays[1].getDate()}</p>
        </div>
        <div className="d-flex flex-column date">
          <p>TUE</p>
          <p className="text-center">{weekDays[2].getDate()}</p>
        </div>
        <div className="d-flex flex-column date">
          <p>WED</p>
          <p className="text-center">{weekDays[3].getDate()}</p>
        </div>
        <div className="d-flex flex-column date">
          <p>THU</p>
          <p className="text-center">{weekDays[4].getDate()}</p>
        </div>
        <div className="d-flex flex-column date">
          <p>FRI</p>
          <p className="text-center">{weekDays[5].getDate()}</p>
        </div>
        <div className="d-flex flex-column date">
          <p>SAT</p>
          <p className="text-center">{weekDays[6].getDate()}</p>
        </div>
      </div>
    </>
  );
};

export default Calendar;
