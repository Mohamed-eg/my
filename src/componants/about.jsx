import React from "react";
import "../styles/about.css";
import Myav from "../img/my-avatar.png";
import { useEffect, useState } from "react";

export default function About(props) {
  const [IMoved, setIMoved] = useState({
    squer1: "",
    squer2: "",
    squer3: "",
  });
  const handelScroll=(x)=>{
    if (x > 200)
      { setIMoved({squer1:"IMoved",squer2:"",squer3:"" })
        if (x > 450)
        {setIMoved({ squer1:"IMoved", squer2: "IMoved", squer3:"" })
        console.log(IMoved)
           if (x > 650)
           {setIMoved({ squer1:"IMoved", squer2: "IMoved", squer3: "IMoved" })
          } else{setIMoved({ squer1:"IMoved", squer2: "IMoved", squer3: "" })}
        }
      else{setIMoved({squer1:"IMoved", squer2: "",squer3: ""  })}
      } 
  else {setIMoved({  squer1: "",squer2: ""  ,squer3: ""  })}

  }
  useEffect(() => {
    handelScroll(props.scrollTop)
  }, [props.scrollTop]);

  return (
    <div id="About" className="Sec2">
      <div className={`I aboutSec ${IMoved.squer1}`}>
        <div className="My_av">
          <img src={Myav}></img>
        </div>

        <div className={`my_info`}>
          <h3>Mohamed_Elshyab</h3>
          <span>Web developer</span>
          <span>{props.scrollTop}</span>
        </div>
      </div>

      <div className={`aboutSec aboutLeft ${IMoved.squer2}`}>
        <h1> About_Me </h1>
        <div>
          <p>
            <span>Hi </span>
            <b>I'm Mohamed</b>
            I'm Creative Director and UI/UX Designer from Egypt, working in web
            development and print media. I enjoy turning complex problems into
            simple, beautiful and intuitive designs. My job is to build your
            website so that it is functional and user-friendly but at the same
            time attractive. Moreover, I add personal touch to your product and
            make sure that is eye-catching and easy to use. My aim is to bring
            across your message and identity in the most creative way. I created
            web design for many famous brand companies.
          </p>
        </div>
      </div>
      <div className={`doing doingRight ${IMoved.squer3}`}>
        <h1> What I'm Doing </h1>
        <div className="my_doing">
          <div>
            <h3>Web Design</h3>
            <p>
              The most modern and high-quality design made at a professional
              level.
            </p>
          </div>
          <img></img>
        </div>
        <div className="my_doing">
          <img></img>
          <div>
            <h3>Web Development</h3>
            <p>High-quality development of sites at the professional level.</p>
          </div>
        </div>
        <div className="my_doing">
          <img></img>
          <div>
            <h3>Mobile Apps</h3>
            <p>
              The most modern and high-quality design made at a professional
              level.
            </p>
          </div>
        </div>
        <div className="my_doing">
          <img></img>
          <div>
            <h3>Photography</h3>
            <p>
              The most modern and high-quality design made at a professional
              level.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
