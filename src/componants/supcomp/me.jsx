import React from "react";
import me from "../../img/1662506224694_1.jpg";
const Me = () => {
  return (
    <div className="Me">
      <small>
        <ul className="sidepar">
          <li><a href="http://"><i className="fa-brands fa-facebook-f"></i></a></li>
          <li><a href="http://"><i className="fa-brands fa-twitter"></i></a></li>
          <li><a href="http://"><i className="fa-brands fa-github-alt"></i></a></li>
          <li><a href="http://"><i className="fa-brands fa-instagram"></i></a></li>
          <li><a href="http://"><i className="fa-brands fa-codepen"></i></a></li>
          <li><a href="http://"><i className="fa-brands fa-whatsapp"></i></a></li>
        </ul>
      </small>
      <big>
          <div className="star"><img src={me} /></div>
            <div className="Allqupec">
              <div className="star1 starb" ></div>
              <div className="star2 starb" ></div>
              <div className="star3 starb" ></div>
              <div className="star4 starb" ></div>
              <div className="star5 starb" ></div>
              <div className="star6 starb" ></div>
            </div>
        <div>
          <h1>
            <span>!Hi</span> I'm Mohamed
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            deleniti nesciunt similique commodi consequuntur suscipit rerum
            optio nemo dolores aliquid voluptatum nihil hic, sed fugiat, ipsum
            ex obcaecati voluptatibus praesentium.
          </p>
        </div>
        <div></div>
      </big>
    </div>
  );
};

export default Me;
