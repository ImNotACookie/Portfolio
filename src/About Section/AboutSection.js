import { useEffect } from "react";
import "./AboutSection.css";
import AboutText from "./AboutText";

function AboutSection() {
  useEffect(() => {
    let check = true;
    if (check) {
      let left = document.getElementById("left");

      const handleMouseMove = (e) => {
        let percentage = (e.clientX / window.innerWidth) * 100;
        left.style.width = `calc(${percentage}% + 10px)`;
      };

      const handleTouchMove = (e) => {
        let percentage =
          (e.changedTouches[0].clientX / window.innerWidth) * 100;
        left.style.width = `calc(${percentage}% + 10px)`;
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("touchmove", handleTouchMove);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("touchmove", handleTouchMove);
        check = false;
      };
    }
  }, []);

  return (
    <section className="page about">
      <AboutText id="right" />
      <AboutText id="left" />
    </section>
  );
}

export default AboutSection;
