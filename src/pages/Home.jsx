import "./Home.css";
import { useNavigate } from "react-router-dom";

function P4() {
  const pdfUrl = new URL(`../assets/ZhiQiLee_resume.pdf`, import.meta.url).href;
  const navigate = useNavigate();

  return (
    <section id="p4">
      <h1>Hello! I'm ZhiQi Lee</h1>
      <p>
        A Software Engineer obsessed with learning how things work. Turning
        those insight into reality is the best learning way for me. You can read
        about some of them @
        <button
          className="navigateButton"
          onClick={() => navigate("/projects")}
        >
          <p>PROJECTS</p>
        </button>
      </p>

      <p>
        As a junior engineer which have a coding journey spanning more than 7
        years, my objective has been to explore different parts of the computer
        world, thereby acquiring hands-on experience in FrontEnd, BackEnd, and
        DevOps domains. The exposure to a wide array of technologies across
        multiple languages and frameworks has enable me to pick up new skills
        and technologies quickly.
      </p>
      <p>
        I'm currently looking for an internship/full-time position and would be
        very pleased to hear from you. To avoid email harvesting, please check
        my email @
        <button className="navigateButton" onClick={() => navigate("/contact")}>
          <p>CV</p>
        </button>
        .
      </p>
    </section>
  );
}
const Home = () => (
  <>
    <P4 />
  </>
);
export default Home;
