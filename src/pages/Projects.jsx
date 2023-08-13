import "./Projects.css";
import ProjectCard from "../components/ProjectCard";

const filename = "image_ipsum";
const Projects = () => (
  <div className="cards">
    <ProjectCard
      projectName={"Snake_Game"}
      description={"A Python-powered classic"}
      fileExtension={"gif"}
    />
    <ProjectCard
      projectName={filename}
      description={
        "dsefsdfvh hihi ijijij huihjijiji jijij  dsfvdsfsdfsdfewrwefewfwe"
      }
      fileExtension={"png"}
    />
  </div>
);
export default Projects;
