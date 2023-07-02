import React from "react";
import me from "../../img/MyPhoto.png";
const Me = () => {
  return (
    <div className="Me">
      <small>
        <ul className="sidepar">
          <li>
            <a href="https://www.facebook.com/mohamed.elshayb.184">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/Mohamed64998935">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/Mohamed-eg">
              <i className="fa-brands fa-github-alt"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/mohammed_a_alsayb/">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://codepen.io/Mohamed-Elshayb">
              <i className="fa-brands fa-codepen"></i>
            </a>
          </li>
          <li>
            <a href="whatsapp://send?abid=+201062750375&text=Hello%2C%20World!">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </li>
        </ul>
      </small>
      <big>
        <div>
          <div className="star">
            <img src={me} />
            <div className="backggrondForimg"></div>
          </div>
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
      </big>
    </div>
  );
};

export default Me;
