import "./ProjectsSection.css";
import Project from "./Project";
import { useEffect } from "react";

function ProjectsSection() {
  let data = [
    {
      src: "./imgs/Windows Security.png",
      alt: "Windows Security clone project",
      title: "Windows Security Clone",
      description:
        "I created this project using HTML, CSS, and JavaScript, and then recreated it using React.",
      link: "https://imnotacookie.github.io/WindowsSecurityClone.github.io/",
    },
    {
      src: "./imgs/ReCode.png",
      alt: "ReCode project",
      title: "ReCode",
      description: "I created this project with my friend adham",
      link: "https://recode-dev.online/",
    },
    {
      src: "./imgs/Portfolio.png",
      alt: "Portfolio project",
      title: "Portfolio",
      description: "You can also consider my portfolio as a project :)",
      link: "#",
    },
    {
      src: "./imgs/Worldpedia.png",
      alt: "Worldpedia project",
      title: "Worldpedia",
      description: "I got the UI/UX from front-end mentor website",
      link: "https://imnotacookie.github.io/Worldpedia-Using-Rest-Countries-API/",
    },
  ];

  useEffect(() => {
    let check = false;
    let projectsContainer = document.querySelector(".projects-container");
    let offsetX = 0;
    let prevPosition = 0;
    let percentage = parseFloat(projectsContainer.dataset.prev);

    function handleDown(e) {
      check = true;
      offsetX = e.clientX;
      prevPosition = parseFloat(projectsContainer.dataset.prev);
    }

    function handleMove(e) {
      if (check) {
        let distanceX = e.clientX - offsetX;
        let newPosition =
          (distanceX / projectsContainer.clientWidth) * 100 +
          parseFloat(projectsContainer.dataset.prev);

        if (newPosition <= -100) {
          newPosition = -100;
        } else if (newPosition >= 0) {
          newPosition = 0;
        }

        if (newPosition >= -100 && newPosition <= 0) {
          projectsContainer.animate(
            {
              transform: `translate(${newPosition}%, -50%)`,
            },
            { duration: 1200, fill: "both" }
          );
        }

        prevPosition = newPosition;
      }
    }

    function handleUp() {
      check = false;
      projectsContainer.dataset.prev = prevPosition;
      percentage = prevPosition;
    }

    function handleWheel(e) {
      if (e.deltaY < 0) {
        percentage += 7.5;
        if (percentage >= 0) {
          percentage = 0;
        }
        projectsContainer.dataset.prev = percentage;
        projectsContainer.animate(
          {
            transform: `translate(${percentage}%, -50%)`,
          },
          { duration: 1200, fill: "both" }
        );
      } else if (e.deltaY > 0) {
        percentage -= 5;
        if (percentage <= -100) {
          percentage = -100;
        }
        projectsContainer.dataset.prev = percentage;
        projectsContainer.animate(
          {
            transform: `translate(${percentage}%, -50%)`,
          },
          { duration: 800, fill: "both" }
        );
      }
    }

    document.addEventListener("mousedown", handleDown);
    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseup", handleUp);
    document.addEventListener("touchstart", (e) =>
      handleDown(e.changedTouches[0])
    );
    document.addEventListener("touchmove", (e) =>
      handleMove(e.changedTouches[0])
    );
    document.addEventListener("touchend", (e) => handleUp(e.changedTouches[0]));
    document.addEventListener("wheel", handleWheel);

    return () => {
      document.removeEventListener("mousedown", handleDown);
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseup", handleUp);
      document.removeEventListener("touchstart", (e) =>
        handleDown(e.changedTouches[0])
      );
      document.removeEventListener("touchmove", (e) =>
        handleMove(e.changedTouches[0])
      );
      document.removeEventListener("touchend", (e) =>
        handleUp(e.changedTouches[0])
      );
      document.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section className="page projects">
      <div className="container">
        <div className="projects-container" data-prev="0">
          {data.map((d, i) => (
            <Project
              key={i}
              src={d.src}
              alt={d.alt}
              title={d.title}
              description={d.description}
              link={d.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
