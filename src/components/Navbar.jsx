import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
  <nav>
    <div className="nav-container">
      <div className="home">
        <NavLink to="/myPortfolio/">Zhiqi Lee</NavLink>
      </div>
      <div className="nav-elements">
        <ul>
          <li>
            <NavLink to="/myPortfolio/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/myPortfolio/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/myPortfolio/notes">Notes</NavLink>
          </li>

          <li>
            <NavLink to="/myPortfolio/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
