import React from "react";

import "./style.scss";

export const Phone = () => {
  return (
    <div class="phone">
      <div>
        <img src="./utils/iphoneSmall.png" alt="iphone-small" />
        <img class="iphone" src="./utils/iphone.png" alt="iphone" />
      </div>
      <div class="iphoneText">
        <div class="dowApp">Download App</div>
        <h1>Simple Way To Order Your Organic Fruit</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer...
        </p>
        <div class="eng">
          <div>
            <img src="./utils/App Store - eng.png" alt="appStore" />
          </div>
          <div class="engGoogle">
            <img src="./utils/Google Play - eng.png" alt="goglePlay" />
          </div>
        </div>
      </div>
    </div>
  );
};
