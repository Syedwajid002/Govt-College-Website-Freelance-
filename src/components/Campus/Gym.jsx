import React from 'react'

import LabCard from '../cards/Campus/LabCard'

import img1 from "../img/gym01.jpg"
import img2 from "../img/gym02.jpg"

const Gym = () => {

  let demoGym = [
    {
      "name": "gym",
      "img": img1,
      "id": 1
    }, {
        "name": "gym",
        "img": img2,
        "id": 2
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
            <span className="relative text-blue-700">Gym</span>
          </span>{' '}
        </h2>
        <p className="text-base text-gray-700 md:text-lg" data-aos="fade-up">
        The Gym is an indoor sports facility. At our college we have a well equipped Gym that will help our students to be fit.
Modern equipment at our Gym
Multi purpose gymnasium hall having 6 stations Gym Equipments and two cycles, two twisters, Dumbbells and having facility for table tennis.




        </p>
      </div>
        <div className='flex flex-col justify-evenly '>
          <div className="flex flex-wrap justify-around items-center p-2">
            {demoGym.map((gym) => (
              <div key={gym.id} className="mb-4 w-full flex justify-center md:w-1/3 px-2">
                <LabCard name={gym.name} img={gym.img} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Gym