import React from "react";
import { Floore } from "../../components/floore/floore";
import { Label2 } from "../../components/label2";
import { Lema } from "../../components/lema";
import { Main } from "../../components/main";
import { Phone } from "../../components/phone";

import "./styles.scss";

export const Home = () => {
  return (
    <div class="lable">
      <Floore />
      <Label2 />
      <Main />
      <Lema />
      <Phone />
    </div>
  );
};
