import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import "./ProjectDetails.css";

function ProjectDetails() {
  const { projectName } = useParams();
  const [post, setPost] = useState("");

  useEffect(() => {
    import(`../markdowns/projects/${projectName}.md`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, [projectName]);

  return (
    <div className="projectDetailsContainer">
      <div className="markdownContainer">
        <Markdown>{post}</Markdown>
        In the process of writing project details~~~
      </div>
    </div>
  );
}

export default ProjectDetails;
