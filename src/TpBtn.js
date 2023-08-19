import ErrorBoundary from "./ErrorBoundary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { Suspense, useState } from "react";
import React from "react";
const SkillsSection = React.lazy(() =>
  import("./Skills Section/SkillsSection")
);
const AboutSection = React.lazy(() => import("./About Section/AboutSection"));
const ProjectsSection = React.lazy(() =>
  import("./Projects Section/ProjectsSection")
);
const ContactMeSection = React.lazy(() =>
  import("./Contact Me Section/ContactMeSection")
);

const componentMap = {
  Skills: SkillsSection,
  About: AboutSection,
  Projects: ProjectsSection,
  ContactMe: ContactMeSection,
};

function TpBtn(props) {
  const [section, setSection] = useState(false);

  function toggleSection() {
    setSection((prev) => !prev);
  }

  const Section = componentMap[props.component];

  return (
    <>
      <button className="btn" onClick={toggleSection}>
        <FontAwesomeIcon icon={props.icon} />
        <span>{props.title}</span>
      </button>
      {section && (
        <ErrorBoundary>
          <Suspense
            fallback={
              <>
                <div className="loading"></div>
                <div id="overlay"></div>
              </>
            }
          >
            <Section />
            <div id="overlay"></div>
            <button className="close" onClick={toggleSection}>
              <FontAwesomeIcon icon={faClose} />
            </button>
          </Suspense>
        </ErrorBoundary>
      )}
    </>
  );
}

export default TpBtn;
