import React from "react";

import palnetEarth from "../../utils/planet-earth (1) 1.svg";
import "./style.scss";

export const Header = () => {
  return (
    <header class="header">
      <ul class="nav">
        <li>About Us</li>
        <li>Service</li>
        <li>Menu</li>
        <li>Contact</li>
      </ul>
      <img width="56" height="56" src={palnetEarth} alt="logo" />
      <ul class="nav-rigth">
        <li class="searchSvg">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="11.9609"
              cy="11.7666"
              r="8.98856"
              stroke="#222222"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="#F3FBF8"
            />

            <path
              d="M18.2126 18.4851L21.7367 22"
              stroke="#222222"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </li>
        <li class="cardSvg">
          <svg
            width="41"
            height="40"
            viewBox="0 0 41 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20.1943" cy="20" r="20" fill="#F3FBF8" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.6166 27.8203C16.0386 27.8203 16.3816 28.1633 16.3816 28.5853C16.3816 29.0073 16.0386 29.3493 15.6166 29.3493C15.1946 29.3493 14.8526 29.0073 14.8526 28.5853C14.8526 28.1633 15.1946 27.8203 15.6166 27.8203Z"
              stroke="#222222"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M26.869 27.8203C27.291 27.8203 27.634 28.1633 27.634 28.5853C27.634 29.0073 27.291 29.3493 26.869 29.3493C26.447 29.3493 26.104 29.0073 26.104 28.5853C26.104 28.1633 26.447 27.8203 26.869 27.8203Z"
              stroke="#222222"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.9442 11.25L13.0242 11.61L13.9872 23.083C14.0652 24.018 14.8462 24.736 15.7842 24.736H26.6962C27.5922 24.736 28.3522 24.078 28.4812 23.19L29.4302 16.632C29.5472 15.823 28.9202 15.099 28.1032 15.099H13.3582"
              stroke="#222222"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M22.3197 18.7969H25.0927"
              stroke="#222222"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </li>
        <li>
          <button>
            <div>Register Now</div>
          </button>
        </li>
      </ul>
    </header>
  );
};
