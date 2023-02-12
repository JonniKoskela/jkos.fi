import "./MainLandPage.css";
import ReactIcon from "../img/reactIcon.png";
import SvelteIcon from "../img/SvelteIcon.png";
import { React } from "react";

function MainLandPage() {
  return (
    <div className="MainLandPage container">
      <div className="MainLandPage headers">
        <h1 className="MainLandPage name">JONNI KOSKELA</h1>
        <h3></h3>
      </div>
      <div className="MainLandPage animationContainer">
        <div className="animationitem cls1"></div>
        <div className="animationitem cls2"></div>
        <div className="animationitem cls3"></div>
        <div className="animationitem cls4"></div>
        <div className="animationitem cls5"></div>
      </div>
      {/*       <div className="MainLandPage techContainer">
        <img className="techIcon react" src={ReactIcon} alt="" srcset="" />
        <img className="techIcon svelte" src={SvelteIcon} alt="" srcset="" />
      </div> */}
    </div>
  );
}

export default MainLandPage;
