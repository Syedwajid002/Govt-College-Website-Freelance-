import React from "react";
import Course from "../components/Admissions/Course";
import SanctionedSeats from "../components/Admissions/SanctionedSeat";
import AdmissionForm from "../components/Admissions/AdmissionForm";
import { HalfPageBanner } from "../components/General/Half";

const Admission = () => {
  return (
    <>
      <HalfPageBanner name="Admission" />
      <div className="flex justify-center">
        <div className="w-full max-w-screen-xl px-4">
          <div className="grid grid-cols-1 gap-6">
            <div className="py-10">
              <AdmissionForm />
            </div>
            <div className="course py-10">
              <Course />
            </div>
            <div className="seat bg-gray-50 py-10">
              <SanctionedSeats />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admission;
