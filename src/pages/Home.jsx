import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "../components/Home/Carousel";
import Moto from "../components/Home/PrincipalHome";
import Courses from "../components/Home/Courses";
import Facility from "../components/Home/Facility";
import Event from "../components/Home/Events";
import UniversityWidget from "../components/Home/UniversityWidget";
import Programs from "../components/Home/Programs";
import Chatbotimg from '../components/chatbot/bot.png';
import ContactUS from "../components/Contact/ContactUS";
import Footer from "../components/General/Footer";
import StudentReviews from "../components/StudentReviews";
import ScrollingNotification from "../components/Home/ScrollingNotification";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 100, easing: "ease-in-out-back" });
  }, []);

  return (
    <>
      <Carousel />
      <Programs />
      <div className="bg-gray-50 lg:p-10">
        <Moto />
        <UniversityWidget />
      </div>
      <Courses />
      <div className="p-10">
        <Facility />
      </div>
      <Event />
      <div className="fixed right-7 md:right-7 z-10 bottom-20" id="botBTn">
        <div className="flex flex-col justify-center items-center gap-2 cursor-pointer">
          <h1 className="text-xs font-bold">
            MJP DIGITAL <br /> ASSISTANT
          </h1>
          <img
            src={Chatbotimg}
            className="w-10 rounded-full"
            onClick={() => {
              document.getElementById("botBTn").style.display = "none";
              document.getElementById("botcon").style.display = "block";
            }}
          />
        </div>
      </div>
      <ContactUS/>
      <StudentReviews/>
      <Footer/>
    </>
  );
};

export default Home;
