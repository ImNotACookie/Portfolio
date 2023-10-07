import { useRef } from "react";
import { leftBtn, rightBtn } from "./skillsFunctions";

function Box(props) {
  let box = useRef(null);

  function touchEnd(e) {
    let percentage = (e.changedTouches[0].clientX / window.innerWidth) * 100;

    if (percentage > 50) {
      leftBtn();
    }

    if (percentage < 50) {
      rightBtn();
    }
  }

  return (
    <div
      className="box"
      data-index={props.index}
      onTouchEnd={touchEnd}
      ref={box}
    >
      <h2>{props.title}</h2>
      <p>{props.info}</p>
    </div>
  );
}

export default Box;
