import { NavLink } from "react-router-dom";
import "./HomeNavbar.css";

const HomeNavbar = () => (
  <nav>
    <div className="home-nav-container">
      <div className="home-nav-elements">
        <ul>
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

export default HomeNavbar;
