import {
  RiHome2Line,
  RiMoneyDollarCircleLine,
  RiCalendarCheckFill,
} from "react-icons/ri";
import { SlSpeech } from "react-icons/sl";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <header className="footer">
      <div className="d-flex flex-row justify-content-around align-items-center">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <RiHome2Line className="fs-1 text" />
          <p className="text-tiny text-dark">Home</p>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <RiCalendarCheckFill className="fs-1 text-primary" />
          <p className="text-tiny text-primary">Schedule</p>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <RiMoneyDollarCircleLine className="fs-1" />
          <p className="text-tiny">Money</p>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <SlSpeech className="fs-1" />
          <p className="text-tiny">Messages</p>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <GiHamburgerMenu className="fs-1" />
          <p className="text-tiny">More</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
