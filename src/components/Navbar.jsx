import { NavLink } from "react-router-dom";
import SVGIcon from "./SVGIcon.jsx";
import "./Navbar.css";

const Navbar = () => (
  <nav>
    <div className="nav-container">
      <div className="home">
        <NavLink to="/">
          <SVGIcon name={"myName"} width="100%" height="50px" />
        </NavLink>
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
            <NavLink to="/contact">CV</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
