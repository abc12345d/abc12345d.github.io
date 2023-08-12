import "./Projects.css";
import ProjectCard from "../components/ProjectCard";

const filename = "image_ipsum";
const Projects = () => (
  <div className="cards">
    <ProjectCard
      projectName={filename}
      description={"dsefsdfvdsfvdsfsdfsdfewrwefewfwe"}
    />
    <ProjectCard
      projectName={filename}
      description={
        "dsefsdfvh hihi ijijij huihjijiji jijij  dsfvdsfsdfsdfewrwefewfwe"
      }
    />
  </div>
);
export default Projects;
