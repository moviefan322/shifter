import React from "react";

const Day = () => {
  return (
    <section>
      <div class="bg-gray custompad border-top border-bottom border-3">
        <div class="container">
          <p class="date fw-bold">SUN | SEP 17</p>
        </div>
      </div>
      <div class="row border-bottom border-3 py-3">
        <div class="col-3">
          <div class="d-flex flex-column justify-content-between timeslot">
            <div>07:45</div>
            <div>13:45</div>
          </div>
        </div>
        <div class="col-2 d-flex flex-row align-items-center">
          <span class="circle">
            <p>GJ</p>
          </span>
        </div>
        <div class="col-7">
          <div class="fw-bold">Gillian J.</div>
          <div>Barista | 6 hr</div>
          <div class="fw-light">Bushwick Public House</div>
        </div>
      </div>
      <div class="row border-bottom border-3 py-3">
        <div class="col-3">
          <div class="d-flex flex-column justify-content-between timeslot">
            <div>13:45</div>
            <div>19:45</div>
          </div>
        </div>
        <div class="col-2 d-flex flex-row align-items-center">
          <span class="circle">
            <p>MK</p>
          </span>
        </div>
        <div class="col-7">
          <div class="fw-bold">Max K.</div>
          <div>Barista | 6 hr</div>
          <div class="fw-light">Bushwick Public House</div>
        </div>
      </div>
      <div class="row py-3">
        <div class="col-3">
          <div class="d-flex flex-column justify-content-between timeslot">
            <div>19:45</div>
            <div>04:00</div>
          </div>
        </div>
        <div class="col-2 d-flex flex-row align-items-center">
          <span class="circle">
            <p>ED</p>
          </span>
        </div>
        <div class="col-7">
          <div class="fw-bold">Eric D.</div>
          <div>Bartender | 6 hr</div>
          <div class="fw-light">Bushwick Public House</div>
        </div>
      </div>
    </section>
  );
};

export default Day;
