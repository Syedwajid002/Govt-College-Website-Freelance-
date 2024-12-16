import React from "react";
import { HalfPageBanner } from "../components/General/Half";
import Events from "../components/StudentCorner/Events";
import EventTld from "../components/StudentCorner/EventTld";
import Eventcld from "../components/StudentCorner/Eventcld";
import EventNlw from "../components/StudentCorner/EventNlw";
import Eventcs from "../components/StudentCorner/Eventcs";
import Placements from "../components/StudentCorner/Placements";
import Mou from "../components/StudentCorner/Mou";
import Ahos from "../components/StudentCorner/Ahos";
import Yhos from "../components/StudentCorner/Yhos";
import Tcs from "../components/StudentCorner/Tcs";
import Ip from "../components/StudentCorner/Ip";
import Ut from "../components/StudentCorner/Ut";
import Sa from "../components/StudentCorner/Sa";
import HigherEd from "../components/StudentCorner/HigherEd";
import Ipi from "../components/StudentCorner/Ipi";
import Gi from "../components/StudentCorner/Gi";
import OuData from "../components/StudentCorner/OuData";
import Gallery from "../components/StudentCorner/Gallery";

const StudentCorner = () => {
  return (
    <>
      <HalfPageBanner name="Student Corner" />
      <div className="flex justify-center">
        <div className="w-full max-w-screen-xl px-4">
          <div className="grid grid-cols-1 gap-6">
            <Events />
            <EventTld />
            <Eventcld />
            <EventNlw />
            <Eventcs />
            <Placements />
            <Mou />
            <Ahos />
            <Yhos />
            <Tcs />
            <Ip />
            <Ut />
            <Sa />
            <HigherEd />
            <Ipi />
            <Gi />
            <OuData />
            <Gallery />
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentCorner;
