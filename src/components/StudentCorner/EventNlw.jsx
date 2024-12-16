import React from 'react'

import LabCard from '../cards/Campus/LabCard'

import img1 from "../img/nld1.jpg"
import img2 from "../img/nld2.jpg"
import img3 from "../img/nld3.jpg"
import img4 from "../img/nld4.jpg"
import img5 from "../img/nld5.jpg"
import img6 from "../img/nld6.jpg"


const EventNlw = () => {

  let demoEventNlw = [
    {
      "name": "NATIONAL LIBRARY WEEK EVENT",
      "img": img1,
      "id": 1
    }, {
      "name": "NATIONAL LIBRARY WEEK EVENT.",
      "img": img2,
      "id": 2
    }, {
        "name": "NATIONAL LIBRARY WEEK EVENT",
        "img": img3,
        "id": 3
    }, {
        "name": "NATIONAL LIBRARY WEEK EVENT",
        "img": img4,
        "id": 4
    }, {
        "name": "NATIONAL LIBRARY WEEK EVENT",
        "img": img5,
        "id": 5
    }, {
        "name": "NATIONAL LIBRARY WEEK EVENT",
        "img": img6,
        "id": 6 
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
          </span>{' National library week'}
        </h2>
        <p className="text-base text-gray-700 md:text-lg" data-aos="fade-up">
        14th to 20th November 2022
Catalyzed and supported by
Principal Sir:
Dr.V.Venkateshwar rao garu
Organized by
Department of Zoology
Ms.M.Srilatha
Degree lecturer (H.O.D) Zoology
Librarians -Mrs Ballaxmi, Mrs Pavani
National library week is celebrated from Nov 14th to 20th .Nov is celebrated as national library week all over India &various programmes are held to enhance public awareness about libraries. Keeping in tune with the tradition MJPTBCWRDC celebrated National Library Week. Drawing the attention of several students .Literary events like ‘’opinion board’’ of students which gives suggestions and compliments.
Poster presentation conducted on library day.
Book Exhibition in all subject books which were visited by all group students who were given a chance to view books of various genres            
The Library Exhibition was inaugurated by vice principal sir P.Govindharao garu, programme was organized by M.srilatha DL in zoology Incharge of library and librarians Mrs.Ballaxmi and Mrs.Pavani MJPTBCWRDC is one of the very few educational centre that encourage book reading habit among the students through such initiatives like establishing automation of library books which will be implemented very soon in the campus.





        </p>
      </div>
        <div className='flex flex-col justify-evenly '>
          <div className="flex flex-wrap justify-around items-center p-2">
            {demoEventNlw.map((EventNlw) => (
              <div key={EventNlw.id} className="mb-4 w-full flex justify-center md:w-1/3 px-2">
                <LabCard name={EventNlw.name} img={EventNlw.img} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default EventNlw;

