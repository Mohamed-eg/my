import React from "react";

const Navtop = (props) => {
  return (
    <>
      <nav>
        <ul className={`UPUL ${props.scrollTop>0 && "transNAv"}`}></ul>
        <ul className="downUL">
        <li>
            <a className={` ${props.scrollTop>0 && props.scrollTop<500 && "visited"}`} href="#Home">Home</a>
          </li>
          <li>
            <a className={` ${props.scrollTop>500 && props.scrollTop<1200 && "visited"}`} href="#About">About</a>
          </li>
          <li>
            <a className={` ${props.scrollTop>1200 && props.scrollTop<1400 && "visited"}`} >Jops</a>
          </li>
          <li>
            <a className={` ${props.scrollTop>1400 && props.scrollTop<1800 && "visited"}`} >Resume</a>
          </li>
          <li>
            <a className={` ${props.scrollTop>1800 && props.scrollTop<2200 && "visited"}`} >Contact</a>
          </li>
        </ul>
      </nav>
      <nav className="smallNav"></nav>
    </>
  );
};

export default Navtop;
