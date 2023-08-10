import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
  <nav>
    <div className="nav-container">
      <div className="home">
        <NavLink to="/">Zhiqi Lee</NavLink>
      </div>
      <div className="nav-elements">
        <ul>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/notes">Notes</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
