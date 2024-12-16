import React from "react";
import { useInView } from "react-intersection-observer";

import { HalfPageBanner } from "../components/General/Half";
import Lab from "../components/Campus/Lab";
import Library from "../components/Campus/Library";
import Mess from "../components/Campus/Mess";
import WellnessCenter from "../components/Campus/WellnessCenter";
import Gym from "../components/Campus/Gym";
import Dormitory from "../components/Campus/Dormitory";
import SportsAchievements from "../components/Campus/SportsAchievements ";

const Campus = () => {
  return (
    <>
    {" "}
    <HalfPageBanner name="Campus Life" />
    <div className="container" style={{ margin: "0px auto" }}>
      <div className="flex">
        <div>
          <div id="lab">
            <Lab />
          </div>

          <div id="library">
            <Library />
          </div> 

          <div id="mess">
            <Mess />
           </div>
           
           <div id="wellness">
            <WellnessCenter />
           </div>

           <div id="Gym">
            <Gym />
           </div>

           <div id="Dormitory">
            <Dormitory />
           </div>

           <div id="SportsAchievements">
             <SportsAchievements />
           </div>
        </div>
      </div>
    </div>
  </>
);
}

export default Campus;