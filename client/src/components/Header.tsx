import { useState, useEffect } from "react";
import Top from "./Top";
import Calendar from "./Calendar";
import Week from "./Week";

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

const Header = () => {
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
      <header className="sticky-top bg-white border-bottom border-1">
        <Top />
        <hr />
        <Calendar formattedDate={formattedDate} weekDays={weekDays} />
      </header>
      <Week weekDays={weekDays} />
    </>
  );
};

export default Header;
