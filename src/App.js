import "./App.css";
// import ReactLoading from "react-loading";
import Lodingpag from "./componants/lodingpag";
import About from "./componants/about";
import Resume from "./componants/resume";
import anime from "animejs/lib/anime.es.js";
import React, { useEffect, useState, useRef } from "react";
import Team from "./componants/team";
import FrontPage from "./componants/FrontPage";
function App() {
  const [scrollTop, setScrollTop] = useState(0);
  const lodingRef = useRef();
  const appref = useRef();

  useEffect(() => {
    appref.current.style = "display:block";
    lodingRef.current.style = "display:none";
  }, [appref.current]);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    anime({
      targets: "#mohamed path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 1000,
      delay: function (el, i) {
        return i * 200;
      },
      direction: "alternate",
      loop: true,
    });
  });
  return (
    <React.Fragment>
      <div ref={lodingRef}>
        <Lodingpag />
      </div>
      <div ref={appref} className="App">
        <FrontPage />
        <Resume scrollTop={scrollTop} />
        <About scrollTop={scrollTop}></About>
        <Team />
      </div>
    </React.Fragment>
  );
}

export default App;
