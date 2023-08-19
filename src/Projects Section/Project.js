import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

function Project(props) {
  return (
    <div className="project">
      <img src={props.src} alt={props.alt} draggable="false" />
      <div className="text">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
      <a href={props.link} target="_blank">
        <FontAwesomeIcon icon={faArrowCircleRight} />
      </a>
    </div>
  );
}

export default Project;
