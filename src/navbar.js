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
      </ul>
    </div>
  );
}
export default Navbar;
