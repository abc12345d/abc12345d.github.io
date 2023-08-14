import "./Footer.css";
import SVGIcon from "./SVGIcon.jsx";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footer">
      <span className="iconList">
        <button className="svgButton" onClick={() => navigate("/Contact")}>
          <SVGIcon name={"email"} />
        </button>

        <a href="https://github.com/abc12345d" target="_blank" rel="noreferrer">
          <SVGIcon name={"github"} />
        </a>
        <a
          href="https://www.linkedin.com/in/zhiqi-lee/"
          target="_blank"
          rel="noreferrer"
        >
          <SVGIcon name={"linkedin"} />
        </a>
      </span>
      <p className="websiteDescription">
        Built with React.js from scratch by <a href="zqlee.xyz">Zhi Qi Lee</a>
      </p>
    </div>
  );
};

export default Footer;
