import React from "react";

import Alumnacs from "../components/Academics/Alumnacs";
import { HalfPageBanner } from '../components/General/Half';

const Academics = () => {
  return (
    <>
      <HalfPageBanner name="Academic Calendar" />
      <div className="container" style={{ margin: "0 auto" }}>
        <div id="alumnacs">
          <Alumnacs />
        </div>
      </div>
    </>
  );
};

export default Academics;
