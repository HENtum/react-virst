import React from "react";

import "./style.scss";

export const Floore = () => {
  return (
    <>
      <div class="floore"></div>
      <div class="texts">
        <div class="text">Organic Fruit & Vegetables</div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley...
        </p>
        <div class="button">
          Order Now
          <div class="svg">
            <svg
              width="33"
              height="16"
              viewBox="0 0 33 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.7071 8.67586C33.0976 8.28533 33.0976 7.65217 32.7071 7.26164L26.3431 0.897682C25.9526 0.507158 25.3195 0.507158 24.9289 0.897682C24.5384 1.28821 24.5384 1.92137 24.9289 2.3119L30.5858 7.96875L24.9289 13.6256C24.5384 14.0161 24.5384 14.6493 24.9289 15.0398C25.3195 15.4303 25.9526 15.4303 26.3431 15.0398L32.7071 8.67586ZM0 8.96875H32V6.96875H0V8.96875Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="image">
        <img
          src="./utils/vegetables-fruits-white_55883-892 1.png"
          alt="vegetables"
        />
        <ul>
          <li>
            <img
              width="56"
              height="56"
              src="./utils/Group 5246.png"
              alt="icon"
            />
            <div>
              30K
              <p>User Order</p>
            </div>
          </li>
          <li>
            <img width="56" height="56" src="./utils/star.png" alt="star" />
            <div>
              20K
              <p>Reviews(4.8)</p>
            </div>
          </li>
          <li>
            <img width="56" height="56" src="./utils/food.png" alt="food" />
            <div>
              300K
              <p></p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
