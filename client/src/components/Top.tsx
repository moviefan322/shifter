const Top = () => {
  return (
    <>
      <div className="container pt-3">
        <div className="row">
          <div className="col-2">
            <span className="circle2">
              <p>PN</p>
            </span>
          </div>
          <div className="col-8 text-center fs-4">Bushwick Public House</div>
          <div className="col-2">
            <img className="s" src="/s.svg" alt="" height="45px" />
          </div>
        </div>
      </div>
      <div className="row px-2 pt-2">
        <div
          className="btn-group col-12"
          role="group"
          aria-label="Basic example"
        >
          <button type="button" className="btn btn-secondary small">
            My Shifts
          </button>
          <button type="button" className="btn btn-primary small">
            All Shifts
          </button>
          <button type="button" className="btn btn-secondary small">
            Open Shifts
          </button>
        </div>
      </div>
    </>
  );
};

export default Top;
