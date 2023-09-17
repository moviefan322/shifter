interface DayProps {
  currentDay: string;
  daySchedule: {
    shifts: {
      start: string;
      end: string;
      initials: string;
      name: string;
      role: string;
      duration: string;
      location: string;
    }[];
  };
}

const Day = ({ currentDay, daySchedule }: DayProps) => {
  return (
    <section>
      <div className="bg-gray custompad pb-5 border-2 sticky">
        <div className="container">
          <p className="date fw-bold">{currentDay}</p>
        </div>
      </div>
      <div className="">
        {daySchedule.shifts.map((shift, index) => (
          <div key={index} className="row border-bottom border-3 py-3">
            <div className="col-3">
              <div className="d-flex flex-column justify-content-between timeslot">
                <div>{shift.start}</div>
                <div>{shift.end}</div>
              </div>
            </div>
            <div className="col-2 d-flex flex-row align-items-center">
              <span className="circle">
                <p>{shift.initials}</p>
              </span>
            </div>
            <div className="col-7">
              <div className="fw-bold">{shift.name}</div>
              <div>
                {shift.role} | {shift.duration}
              </div>
              <div className="fw-light">Bushwick Public House</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Day;
