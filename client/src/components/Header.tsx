import Top from "./Top";
import Calendar from "./Calendar";

const Header = () => {
  return (
    <header className="sticky-top bg-white border-bottom border-1">
      <Top />
      <hr />
      <Calendar />
    </header>
  );
};

export default Header;
