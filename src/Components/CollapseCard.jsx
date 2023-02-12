import { useState, useRef, useEffect } from "react";
import "./CollapseCard.css";
import arrowIcon from "../img/iconmonstr-caret-down-circle-lined.svg"
function CollapseCard(props) {
  const [collapse, setCollapse] = useState(false);
  const CollapseDefault = props.CollapseDefault;

  useEffect(() => {
    setCollapse(CollapseDefault);
  }, []);

  const heightEl = useRef();
  const handleToggle = () => {
    setCollapse(!collapse);
  };
  return (
    <div id="CollapseCardContainer" className={props.customClass}>
      <div id="CollapseToggle" onClick={handleToggle}>
        <h1>{props.ButtonText}</h1>
        <img
          className={collapse ? "rotate" : ""}
          src={arrowIcon}
          alt="&rsaquo;"
          srcset=""
        />
      </div>

      <div
        id="CollapseContent"
        className={collapse ? "show" : "hide"}
        ref={heightEl}
        style={
          collapse
            ? { height: heightEl.current.scrollHeight, visibility: "visible" }
            : { height: 0, visibility: "collapse" }
        }
      >
        <p>{props.CollapseText}</p>
      </div>
    </div>
  );
}

export default CollapseCard;
