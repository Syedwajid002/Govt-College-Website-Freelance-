import React from 'react';
import LabCard from '../cards/Campus/LabCard';

import img1 from "../img/library_1.png";
import img2 from "../img/lib_2.png";

const Library = () => {

  let demoLibrary = [
    {
      "name": "Library",
      "img": img1,
      "id": 1,
      "volumes": [
        "Introduction to Computer Science",
        "Advanced Algorithms",
        "Database Management Systems",
        "Data Structures and Algorithms"
      ]
    }, 
    {
      "name": "Study area",
      "img": img2,
      "id": 2,
      "volumes": [
        "Networking Basics",
        "Web Development",
        "Cyber Security",
        "Digital Marketing"
      ]
    }
  ];

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
              <span className="relative text-blue-700">Library</span>
            </span>{' '}
          </h2>
          <p className="text-base text-gray-700 md:text-lg" data-aos="fade-up">
            The library is the resource center for academic and research activities in the area of language teaching and literature in English and other languages. The Library has a good collection of materials in the fields of science, Commerce, Accountancy, communication skills, political science, History, Economics etc.
          </p>
        </div>
        <div className='flex flex-col justify-evenly '>
          {demoLibrary.map((library) => (
            <div key={library.id} className="mb-8 w-full md:w-1/2 lg:w-1/3 px-2">
              <div className="flex flex-col items-center">
                <img src={library.img} alt={library.name} className="mb-4 w-full h-auto rounded-lg shadow-md" />
                <h3 className="text-xl font-bold mb-2">{library.name}</h3>
                <ul className="text-base text-gray-700">
                  {library.volumes.map((volume, index) => (
                    <li key={index}>{volume}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Library;
