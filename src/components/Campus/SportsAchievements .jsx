import React from 'react'

import LabCard from '../cards/Campus/LabCard'

import img1 from "../img/sa1.jpg"
import img2 from "../img/sa2.jpg"
import img3 from "../img/sa3.jpg"
import img4 from "../img/sa4.jpg"
import img5 from "../img/sa5.jpg"
import img6 from "../img/sa6.jpg"
import img7 from "../img/sa7.jpg"
import img8 from "../img/sa8.jpg"
import img9 from "../img/sa9.jpg"


const SportsAchievements = () => {

  let demoSportsAchievements = [
    {
      "name": "Sports Events",
      "img": img1,
      "id": 1
    }, {
      "name": "Sports Events",
      "img": img2,
      "id": 2
    }, {
      "name": "Sports Events",
      "img": img3,
      "id": 3
    }, {
        "name": "Sports Achievements",
        "img": img4,
        "id": 4
    }, {
        "name": "Sports Achievements",
        "img": img5,
        "id": 5
    }, {
        "name": "Sports Achievements",
        "img": img6,
        "id": 6
    }, {
        "name": "Sports Awards",
        "img": img7,
        "id": 7
    }, {
        "name": "Sports Awards",
        "img": img8,
        "id": 8
    }, {
        "name": "Sports Awards",
        "img": img9,
        "id": 9
        
    }
  ]

  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2
          className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
          data-aos="fade-up"
        >
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative text-blue-700">Sports Achievements</span>
          </span>{' '}
        </h2>
        <p className="text-base text-gray-700 md:text-lg" data-aos="fade-up">
         

        </p>
      </div>
        <div className='flex flex-col justify-evenly '>
          <div className="flex flex-wrap justify-around items-center p-2">
            {demoSportsAchievements.map((SportsAchievements) => (
              <div key={SportsAchievements.id} className="mb-4 w-full flex justify-center md:w-1/3 px-2">
                <LabCard name={SportsAchievements.name} img={SportsAchievements.img} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SportsAchievements