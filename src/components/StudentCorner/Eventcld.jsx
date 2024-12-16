import React from 'react';
import LabCard from '../cards/Campus/LabCard';

import img1 from "../img/cld1.jpg";
import img2 from "../img/cld2.jpg";
import img3 from "../img/cld3.jpg";
import img4 from "../img/cld4.jpg";
import img5 from "../img/cld5.jpg";
import img6 from "../img/cld6.jpg";
import img7 from "../img/cld7.jpg";
import img8 from "../img/cld8.jpg";
import img9 from "../img/cld9.jpg";

const Eventcld = () => {

  let demoEventcld = [
    {
      "name": "Speech by a student",
      "description": "A speech given by IIIMSCs Pavani on cyber security.",
      "img": img1,
      "id": 1
    },
    {
      "name": "Skit Performed by IIIMPCs students",
      "description": "A skit performed by IIIMPCs students focusing on cyber security.",
      "img": img2,
      "id": 2
    },
    {
      "name": "Power Point presentations given by student",
      "description": "Presentations on Ethical Hacking, Artificial Intelligence, Robotics in AI, Gaming.",
      "img": img4,
      "id": 4
    },
    {
      "name": "Computer literacy day event",
      "description": "Various events and activities to promote computer literacy.",
      "img": img5,
      "id": 5
    },
    {
      "name": "Computer literacy day event",
      "description": "Various events and activities to promote computer literacy.",
      "img": img6,
      "id": 6
    },
    {
      "name": "Computer literacy day event",
      "description": "Various events and activities to promote computer literacy.",
      "img": img7,
      "id": 7
    },
    {
      "name": "Computer literacy day event",
      "description": "Various events and activities to promote computer literacy.",
      "img": img8,
      "id": 8
    },
    {
      "name": "Computer literacy day event",
      "description": "Various events and activities to promote computer literacy.",
      "img": img9,
      "id": 9
    }
  ];

  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-full mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
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
            </span>{' Computer Literacy Day'}
          </h2>
          <p className="text-base text-gray-700 md:text-lg max-w-4xl mx-auto" data-aos="fade-up">
            The day is celebrated as the world computer literacy day to create awareness about the efficient use of computers and digital literacy. “Computers are omnipresent and Digital Literacy is requisite” keeping this in consideration the Department of Computer Science celebrated Computer Literacy day on 2nd December 2022 which was aimed to create awareness and encourage the students about the efficient use of computer science domain in their day-to-day life, and also motivating them to learn new skills in the domain. On the day, IIIMSCs Pavani gave a speech and IIIMPCs students performed a skit to create awareness on cyber security. IIIMSCs & IIIMPCs students gave powerpoint presentations on Ethical Hacking, Artificial Intelligence, Robotics in AI, Gaming. Dr.S.Radharani and Dr.K.Nikitha organized the event with the help of student coordinators and it was successful. Organized by : Department of Computer Science Venue : Library Hall, MJPTBCWRDC Wargal. Faculty Coordinators: Dr.K.Nikitha and Dr.S.Radha Rani. Student Coordinators: All Final MSCs and MPCs students.
          </p>
        </div>
        <div className='flex flex-wrap justify-center'>
          {demoEventcld.map((event) => (
            <div key={event.id} className="mb-8 w-full md:w-1/2 lg:w-1/3 px-2">
              <div className="flex flex-col items-center">
                <img src={event.img} alt={event.name} className="mb-4 w-full h-auto rounded-lg shadow-md" />
                <h3 className="text-xl font-bold mb-2">{event.name}</h3>
                <p className="text-base text-gray-700">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Eventcld;
