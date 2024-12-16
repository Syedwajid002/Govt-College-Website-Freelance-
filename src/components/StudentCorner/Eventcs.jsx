import React from 'react'

import LabCard from '../cards/Campus/LabCard'

import img1 from "../img/cs1.jpg"
import img2 from "../img/cs2.jpg"


const Eventcs = () => {

  let demoEventcs = [
    {
      "name": "Cyber Security Event",
      "img": img1,
      "id": 1
    }, {
      "name": "Cyber Security Event",
      "img": img2,
      "id": 2
    },
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
            <span className="relative text-blue-700">Event</span>
          </span>{' Extension Lecture on Cyber Security'}
        </h2>
        <p className="text-base text-gray-700 md:text-lg" data-aos="fade-up">
        Department of Computer Science hosted one day Extension Lecture on Cyber Security on 17th September 2019. We thank Sri. Mallaiah Battu that MJPTBC Residential Degree College, Wargal was given the chance to host Cyber Security Extension Lecture. S. Radha Rani, ATP & Lecturer, CS Dept., Dr. K.Nikitha, Lecturer, CS Dept. and Mrs. A.Archana, Lecturer, CS Dept was selected as coordinators. All the faculty members and III Year BSc MSCs has supported and given their efforts in organizing this lecture. This lecture was attended by 700 participants including students and faculty.
 
        The Inaugural session was presided by Dr. M.Venkateshwara Rao, Principal, and Sri. Govinda Rao, Vice-Principal MJPTBCRDC. I.L. Narasimha Rao,Sr. Project Manager, Cyber Peace Foundation  graced the occasion as Chief Guest. 

The main objective of the lecture was to provide awareness on threats related to Internet and E-Commerce in the daily life usage of Computer and mobile phone. This program was aimed at enhancing the knowledge on cyber crimes and laws so that a greater number of students and faculty can be aware on these issues. There was an overwhelming response from students of all streams.


 
The participants gave very good feedback on the sessions provided.


        </p>
      </div>
        <div className='flex flex-col justify-evenly '>
          <div className="flex flex-wrap justify-around items-center p-2">
            {demoEventcs.map((Eventcs) => (
              <div key={Eventcs.id} className="mb-4 w-full flex justify-center md:w-1/3 px-2">
                <LabCard name={Eventcs.name} img={Eventcs.img} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Eventcs;
