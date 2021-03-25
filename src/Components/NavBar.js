import { NavLink } from "react-router-dom";
import "./navbarstyle.css";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact="true" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/discover">Discover</NavLink>
        </li>
        <li>
          <NavLink to="about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
}
