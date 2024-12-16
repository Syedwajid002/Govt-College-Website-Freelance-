import React from 'react';
import achi1 from "../img/sa1.jpg";
import achi2 from "../img/sa8.jpg";
import achi3 from "../img/sa9.jpg";
import achi4 from "../img/sa7.jpg";

const Courses = () => {
  const achievements = [
    { imageSrc: achi2, description: "STATE LEVEL FEMALE KABADI COMPETITIONS" },
    { imageSrc: achi1, description: "STATE LEVEL COMPETITION" },
    { imageSrc: achi3, description: "CONGRATULATIONS TO THE WINNING STUDENTS" },
    { imageSrc: achi4, description: "FEMALE UG STUDENTS EMBARKING ON THEIR PROFESSIONAL JOURNEY" },
  ];

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
        <h2 data-aos="fade-up" className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
          <span className="inline-block mb-1 sm:mb-4">
            ACHIEVEMENTS
            <br className="hidden md:block" />
          </span>
          <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
        </h2>
      </div>
      <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
        {achievements.map((achievement, index) => (
          <a key={index} href="/" data-aos="fade-up" aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img className="w-full" src={achievement.imageSrc} alt={achievement.description} />
              <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                <p className="text-sm font-medium tracking-wide text-white">
                  {achievement.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Courses;
