import "./WIP.css";
import { useEffect, Fragment, useState } from "react";
import TSIcon from "../img/Typescript_logo_2020.png";
import ReactIcon from "../img/reactIcon.png";
import SvelteIcon from "../img/SvelteIcon.png";
import CSharpIcon from "../img/csharp-e7b8fcd4ce.png";
import TailwindIcon from "../img/Tailwind_CSS_Logo.svg.png";
import CollapseCard from "../Components/CollapseCard";

function WIP() {
  return (
    <div id="wipContainer">
      <h3>My programming road map for 2023 as of january</h3>
      <ul id="wipRoadmap">
        <li className="wipRoadmapItem" style={{ padding: "24px" }}>
          <img
            style={{ height: "50%", marginBottom: "8px" }}
            src={TSIcon}
            alt=""
            srcset=""
          />
          <img
            style={{ height: "50%", marginTop: "8px" }}
            src={ReactIcon}
            alt=""
            srcset=""
          />
        </li>
        <li className="wipRoadmapItem">
          <img src={SvelteIcon} alt="" srcset="" />
        </li>
        <li className="wipRoadmapItem" style={{ padding: "4px" }}>
          <img
            style={{ height: "50%" }}
            id="Tailwind"
            src={TailwindIcon}
            alt=""
            srcset=""
          />
          <img
            style={{ height: "50%" }}
            id="CSharp"
            src={CSharpIcon}
            alt=""
            srcset=""
          />
        </li>

        <li className="wipRoadmapItem">
          <img id="Tailwind" src={TailwindIcon} alt="" srcset="" />
        </li>
      </ul>
{/*       <CollapseCard customClass="RoadmapCollapse"></CollapseCard> */}
    </div>
  );
}

export default WIP;
