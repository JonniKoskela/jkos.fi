import { useState, useRef, useEffect } from "react";
import "./CollapseCardWithInner.css";
import CollapseCard from "./CollapseCard";
import arrowIcon from "../img/iconmonstr-caret-down-circle-lined.svg"

function CollapseCardWithInner(props) {
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
            <div id="CollapseCardWithInnerContainer">
                  <div id="CollapseToggle" onClick={handleToggle}>
                        <h1>{props.ButtonText}</h1>
                        <img
                              className={collapse ? "rotate" : ""}
                              src={arrowIcon}
                              onError={({ currentTarget }) => {
                                    currentTarget.onerror = null
                                  }}
                              alt="&rsaquo;"
                              srcset=""
                        />
                  </div>

                  <div
                        id="CollapseWithInnerContent"
                        className={collapse ? "CCI show" : "CCI hide"}
                        ref={heightEl}
                        style={
                              collapse
                                    ? { maxHeight: "1000px" }
                                    : { maxHeight: "0" }
                        }
                  >
                        <p>{props.CollapseText}</p>

                        <div id="innerOuter">
                              <div id="innerContainer">
                                    <CollapseCard
                                          ButtonText="CSS"
                                          CollapseText='Päätin tehdä sivun CSS:än käsin harjoittelun vuoksi vaikkakin se tulisi olemaan valmista kirjastoa tai frameworkia, kuten Bootstrapia tai Tailwind CSS:ää työläämpi vaihtoehto. 
		  Koska sivun on tarkoitus olla enemmän henkilökohtainen, kuin "ammattimainen", on palkitsevampaa saada sivusta henkilökohtaisemman näköinen '
              customClass = {"inner"}
                                    ></CollapseCard>
                              </div>
                              <div id="innerContainer">
                                    <CollapseCard
                                          ButtonText="sivuun käytetyt työkalut"
                                          CollapseText={
                                                collapse
                                                      ? "sivun toiminnallisuus ja järjestely on toteutettu Reactilla ja lukuunottamatta joitain kirjastoja kuten React routeria en ole sivuun käyttänyt muita viitekehyksiä, enkä työkaluja. "
                                                      : ""
                                          }
                                          customClass = {"inner"}
                                    ></CollapseCard>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default CollapseCardWithInner;
