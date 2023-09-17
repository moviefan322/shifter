import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface CalendarProps {
  formattedDate: string;
  weekDays: Date[];
}

const Calendar = ({ formattedDate, weekDays }: CalendarProps) => {
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
