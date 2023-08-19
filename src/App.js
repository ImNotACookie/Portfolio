import "./App.css";
import TpBtn from "./TpBtn";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestion,
  faFolder,
  faLightbulb,
  faPhone,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOnlineStatus);

    return () => {
      window.removeEventListener("online", handleOnlineStatus);
      window.removeEventListener("offline", handleOnlineStatus);
    };
  }, []);

  return (
    <div className="landing">
      {!isOnline && (
        <div id="error">
          No Internet Connection
          <button onClick={() => setIsOnline(true)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      )}
      <div className="container">
        <p className="descreption">
          <span className="big">Hi,</span> <br /> I'm{" "}
          <span className="colored">Mahmoud Mohamed</span>,
          <br />
          <span className="description-two">
            A <span className="colored">Front-End</span> Web Developer
          </span>
        </p>
        <div className="btns-container">
          <TpBtn icon={faQuestion} title="About Me" component="About" />
          <TpBtn icon={faFolder} title="My Projects" component="Projects" />
          <TpBtn icon={faLightbulb} title="My Skills" component="Skills" />
          <TpBtn icon={faPhone} title="Contact Me" component="ContactMe" />
        </div>
      </div>
    </div>
  );
}

export default App;
