import "./Projects.css";
import ProjectCard from "../components/ProjectCard";

const filename = "image_ipsum";
const Projects = () => (
  <div className="cards">
    <ProjectCard
      projectName={"Stock_News_Alert_System"}
      description={
        "Sends SMS notifications when the closing price of yesterday and the day before yesterday differs by more than 5%"
      }
      fileExtension={"gif"}
    />
    <ProjectCard
      projectName={"Personalised_Email_Automation"}
      description={
        "Sends bulk of personalised emails automatically from CSV file using Python."
      }
      fileExtension={"gif"}
    />
    <ProjectCard
      projectName={"Snake_Game"}
      description={"A classic Snake game empowered by Python."}
      fileExtension={"gif"}
    />
    <ProjectCard
      projectName={"Pong_Game"}
      description={"An iconic two-player pong game powered by Python."}
      fileExtension={"gif"}
    />
    <ProjectCard
      projectName={"Pomodoro_Timer"}
      description={
        "A simple GUI pomodoro timer implemented using Python Tkinter module."
      }
      fileExtension={"gif"}
    />
    <ProjectCard
      projectName={"Turtle_Crossing_Game"}
      description={
        "A Python-powered simplified version of classic Frogger game."
      }
      fileExtension={"gif"}
    />
  </div>
);
export default Projects;
