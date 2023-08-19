import "./SkillsSection.css";
import Box from "./Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  rightBtn,
  leftBtn,
  btnFun,
  activeIndex,
  setActive,
} from "./skillsFunctions";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-regular-svg-icons";
import React, { useEffect } from "react";

function SkillsSection() {
  const htmlInfo =
    "HTML, or Hypertext Markup Language, is the fundamental building block of web pages. It provides the structure and content for websites, enabling the arrangement of text, images, links, and other elements. With HTML, I create the foundation upon which websites are built, ensuring proper organization and accessibility for seamless user experiences.";

  const cssInfo =
    "CSS, or Cascading Style Sheets, is the artistic brush of web development. It brings life and visual appeal to web pages by controlling their layout, colors, fonts, and overall design. With CSS, I transform the raw HTML structure into beautifully crafted and responsive websites that capture attention and provide a polished user interface.";

  const jsInfo =
    "JavaScript is the dynamic powerhouse behind interactive web experiences. It adds functionality and interactivity to websites, enabling features like animations, form validation, and real-time updates. With JS, I create engaging user interactions that make websites come to life, enhancing user engagement and creating seamless, dynamic web applications.";

  const reactInfo =
    "React is the modern framework that revolutionizes web development. It empowers me to build dynamic and complex user interfaces by breaking them down into reusable components. With React, I create interactive and efficient web applications that seamlessly update as users interact, offering a smooth and engaging experience that adapts to their needs and preferences.";

  useEffect(function () {
    let check = true;

    if (check) {
      if (activeIndex !== 0) {
        setActive();
      }
      btnFun();
    }

    return () => {
      check = false;
    };
  }, []);

  return (
    <section className="skills page">
      <button className="left i-btn">
        <FontAwesomeIcon icon={faArrowAltCircleLeft} onClick={leftBtn} />
      </button>
      <div className="boxs">
        <Box title="HTML" info={htmlInfo} index="0" />
        <Box title="CSS" info={cssInfo} index="1" />
        <Box title="JavaScript" info={jsInfo} index="2" />
        <Box title="React" info={reactInfo} index="3" />
      </div>
      <button className="right i-btn" onClick={rightBtn}>
        <FontAwesomeIcon icon={faArrowAltCircleRight} />
      </button>
    </section>
  );
}

export default SkillsSection;
