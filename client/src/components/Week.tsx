import Day from "./Day.tsx";
import { schedule } from "../utils/schedule.ts";

interface WeekProps {
  weekDays: Date[];
}

const Week = ({ weekDays }: WeekProps) => {
  return (
    <div className="border-top border-2">
      {weekDays.map((day, index) => {
        const dayOfMonth = day.getDate();
        const month = day.toLocaleDateString("en-US", { month: "short" });
        const dayOfWeek = day.toLocaleDateString("en-US", { weekday: "short" });
        const dateString = `${dayOfWeek} | ${month} ${dayOfMonth}`;

        return (
          <Day
            key={index}
            currentDay={dateString}
            daySchedule={schedule[index]}
          />
        );
      })}
    </div>
  );
};

export default Week;
