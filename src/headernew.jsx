import { React, useRef, useEffect, useState } from "react";
import "./headernew.css";
import { Link } from "react-router-dom";
import wipIcon from "./img/iconmonstr-wrench-25.svg";
import projectsIcon from "./img/iconmonstr-product-7.svg";
import listIcon from "./img/iconmonstr-list-lined.svg";
import gmailIcon from "./img/iconmonstr-gmail-3.svg";
import phoneIcon from "./img/iconmonstr-smartphone-12.svg";
import discordIcon from "./img/iconmonstr-discord-3.svg";
import homeIcon from "./img/home-page-svgrepo-com.svg";

function headernew() {
  const headerRef = useRef();
  const themeRef = useRef();
  const [headerHeight, setHeaderHeight] = useState(90);
  const [theme, setTheme] = useState(true);
  const [prevOpac, setprevOpac] = useState();

  useEffect(() => {
    setHeaderHeight(headerRef.current.clientHeight);
    console.log(headerHeight);
  }, []);

  useEffect(() => {
    console.log(headerHeight);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleTheme() {
    setTheme(!theme);
    console.log(theme);
  }

  const handleHover = () => {
    setprevOpac(headerRef.current.style.opacity);
    headerRef.current.style.opacity = 1;
  };
  const handleLeave = () => {
    if (window.scrollY > 300) {
      headerRef.current.style.opacity = prevOpac;
    } else {
      headerRef.current.style.opacity = (130 - window.scrollY / 5) / 100;
    }
  };

  const handleScroll = (event) => {
    const eScrl = Math.floor(event.currentTarget.scrollY);
    const scrollCalculated = (eScrl - 100) / 5;

    if (eScrl < 100) {
      headerRef.current.style.height = `90px`;
      headerRef.current.style.opacity = 0.99;
    }
    if (eScrl > 300) {
      headerRef.current.style.height = `40px`;
      headerRef.current.style.opacity = 0.5;
    }
    if (eScrl > 100 && eScrl < 350) {
      const headerOpac = (130 - eScrl / 5) / 100;
      const headerOpacFixedNum = headerOpac.toFixed(2);
      headerRef.current.style.opacity = `${headerOpacFixedNum}`;
      headerRef.current.style.height = `${headerHeight - scrollCalculated}px`;
    }
  };

  return (
    <div
      id="headercontainer"
      ref={headerRef}
      className={theme ? "dark" : "light"}
      onMouseOver={handleHover}
      onMouseOut={handleLeave}
    >
      <div id="site-main">
        <Link to="/">
          <img src={homeIcon}/>
        </Link>
      </div>
      <nav id="headernav">
        <ul>
          <li className="nav projects">
            <Link to="/projects">
              <img src={projectsIcon} />
            </Link>
          </li>
          <li className="nav wip">
            <Link to="/wip">
              {" "}
              <img src={wipIcon} />
            </Link>
          </li>
        </ul>
      </nav>
      <div id="themeBtnContainer" ref={themeRef} onClick={handleTheme}>
        <input type="checkbox" name="theme-button" id="themeBtn" />
        <div id="themeInner"></div>
      </div>
      <div className="dropdown container">
        <img src={listIcon} />
        {/*         <div className="dropdown button"></div> */}
        <ul id="dropdownlist">
          <li className="listitem dc">
            <Link to="/contact">
              <img src={gmailIcon} alt="" />
            </Link>
          </li>
          <li className="listitem gm">
            <Link to="/contact">
              <img src={discordIcon} alt="" />
            </Link>
          </li>
          <li className="listitem sms">
            <Link to="/contact">
              <img src={phoneIcon} alt="" srcset="" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default headernew;
