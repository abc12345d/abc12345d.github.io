/* eslint-disable react/prop-types */
import "./ProjectCard.css";

function ImageWrapper({ filename }) {
  const imgUrl = new URL(`../assets/images/${filename}.png`, import.meta.url)
    .href;
  return <img src={imgUrl} />;
}

const TextWrapper = ({ shortDescription }) => (
  <>
    <a>Link ipsum</a>
    <br />
    {shortDescription}
  </>
);

function ProjectCard({ shortDescription }) {
  const filename = "image_ipsum";

  return (
    <div className="projectCard-container">
      <div className="imageWrapper-projectCard">
        <ImageWrapper filename={filename} />
      </div>
      <div className="textWrapper-projectCard">
        <TextWrapper shortDescription={shortDescription} />
      </div>
    </div>
  );
}

export default ProjectCard;
