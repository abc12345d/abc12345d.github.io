import "./Home.css";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";

function Home() {
  const pdfUrl = new URL(`../assets/ZhiQiLee_resume.pdf`, import.meta.url).href;
  const navigate = useNavigate();

  return (
    <section id="aboutMe">
      <TypeAnimation
        sequence={["Hello! I'm ZhiQi Lee"]}
        speed={40}
        repeat={3}
        style={{
          fontFamily: "monospace",
          fontSize: " 2.3em",
          fontWeight: "800",
        }}
      />
      <h1></h1>
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
        .
      </p>

      <p>
        As a junior engineer which have a coding journey spanning more than 7
        years, my objective has been to explore different parts of the computer
        world, thereby acquiring hands-on experience in frontend, backend,
        devops, and more. With exposure to a wide array of technologies across
        multiple languages and frameworks, I am confident that I will be able to
        pick up new skills and technologies quickly.
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
export default Home;
