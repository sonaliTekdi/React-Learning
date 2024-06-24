import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="">About Us</Link>
        </li>
        <li>
          <Link to="/getAPi">get Api</Link>
        </li>
        <li>
          <Link to="/create">User Information</Link>
        </li>
        <li>
          <Link to="/counter">Counter (State Example)</Link>
        </li>
        <li>
          <Link to="/empinfo">Employee Information</Link>
        </li>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
