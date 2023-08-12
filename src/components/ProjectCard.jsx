/* eslint-disable react/prop-types */
import "./ProjectCard.css";
import { NavLink } from "react-router-dom";

function ImageWrapper({ filename }) {
  const imgUrl = new URL(`../assets/images/${filename}.png`, import.meta.url)
    .href;
  return (
    <NavLink to={`/projects/${filename}`}>
      <img src={imgUrl} />
    </NavLink>
  );
}

const TextWrapper = ({ projectName, description }) => (
  <>
    <NavLink to={`/projects/${projectName}`}>
      {projectName.toString().split("_").join(" ")}
    </NavLink>
    <br />
    {description}
  </>
);

function ProjectCard({ projectName, description }) {
  console.log(projectName);
  return (
    <div className="projectCard-container">
      <div className="imageWrapper-projectCard">
        <ImageWrapper filename={projectName} />
      </div>
      <div className="textWrapper-projectCard">
        <TextWrapper projectName={projectName} description={description} />
      </div>
    </div>
  );
}

export default ProjectCard;
