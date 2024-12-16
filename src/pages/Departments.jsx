import React from "react";
import { HalfPageBanner } from "../components/General/Half";
import Language from "../components/Departments/Language";
import Dot from "../components/Departments/Dot";
import Cs from "../components/Departments/Cs";
import Chem from "../components/Departments/Chem";
import Botany from "../components/Departments/Botany";
import Zoology from "../components/Departments/Zoology";
import Biotech from "../components/Departments/Biotech";
import Bchem from "../components/Departments/Bchem";
import Phy from "../components/Departments/Phy"
import Math from "../components/Departments/Math";
import Stats from "../components/Departments/Stats";
import Eco from "../components/Departments/Eco";
import Psd from "../components/Departments/Psd";
import Com from "../components/Departments/Com";
const Departments = () => {
  return (
    <>
      <HalfPageBanner name="Departments"/>
      <div className="mx-auto" style={{ margin: "0 auto" }}>
        <div className="flex justify-center">
          <div>
            <div id="language">
              <Language />
            </div>
            <div id="dot">
              <Dot />
            </div>
            <div id="cs">
              <Cs />
            </div>
            <div id="chem">
              <Chem />
            </div>
            <div id="botany">
              <Botany />
            </div>
            <div id="zoology">
              <Zoology />
            </div>
            <div id="biotech">
              <Biotech />
            </div>
            <div id="bchem">
              <Bchem />
            </div>
            <div id="phy">
              <Phy />
            </div>
            <div id="math">
              <Math />
            </div>
            <div id="stats">
              <Stats />
            </div>
            <div id="eco">
              <Eco />
            </div>
            <div id="psd">
              <Psd />
            </div>
            <div id="com">
              <Com />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Departments;