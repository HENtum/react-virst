import React from "react";

import "./style.scss";

export const Footer = () => {
  return (
    <footer>
      <div class="firstDiv">
        <img src="./utils/planet-earth (1) 1.svg" alt="logo" />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer...
        </p>
      </div>
      <div class="secondDiv">
        <ul>
          <li class="nameUl">Navigation</li>
          <li class="liUl">About Us</li>
          <li class="liUl">Service</li>
          <li class="liUl">Menu</li>
        </ul>
      </div>
      <div class="threeDiv">
        <ul>
          <li class="nameUl">Resources</li>
          <li class="liUl">Reviews</li>
          <li class="liUl">Blog</li>
          <li class="liUl">Update News</li>
        </ul>
      </div>
      <div class="foDiv">
        <ul>
          <li class="nameUl">Contact Us</li>
          <li class="liUl">Email: oyasim@email.com</li>
          <li>
            <ul class="iconUl">
              <li>
                <img src="./utils/fasebookIcon.png" alt="fasebookIcon" />
              </li>
              <li>
                <img src="./utils/twitterIcon.png" alt="twitterIcon" />
              </li>
              <li>
                <img src="./utils/instagramIcon.png" alt="instagramIcon" />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </footer>
  );
};
