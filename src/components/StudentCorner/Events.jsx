import React from 'react'

import LabCard from '../cards/Campus/LabCard'

import img1 from "../img/nsd1.jpg"
import img2 from "../img/nsd2.jpg"
import img3 from "../img/nsd3.jpg"
import img4 from "../img/nsd4.jpg"
import img5 from "../img/nsd5.jpg"
import img6 from "../img/nsd6.jpg"
import img7 from "../img/nsd7.jpg"
import img8 from "../img/nsd8.jpg"
import img9 from "../img/nsd9.jpg"
import img10 from "../img/nsd10.jpg"

const Events = () => {

  let demoEvents = [
    {
      "name": "The program was specially designed for 4th and 6thSem Bsc.bzc students",
      "img": img1,
      "id": 1
    }, {
      "name": "Department of zoology has conducted various activities and exhibitions which is an eclectic whole day event open to all.",
      "img": img2,
      "id": 2
    }, {
        "name": "Firstly, in morning specimens and slides were exhibited .All students, faculty and Vice principal sir visited zoology lab and gained knowledge about invertebrates and vertebrates",
        "img": img3,
        "id": 3
    }, {
        "name": "In the afternoon session Prameela from final BZC explained PPT on’’ STEM CELL THERAPY ’’, she said about different kinds of stem cells and their uses.",
        "img": img4,
        "id": 4
    }, {
        "name": "Ravali from final BZC explained about NANO TECHNOLOGY .She explained nanotechnology Applications, Diagnosis, Use, History. All the students gained knowledge about NANOMEDICINE ADVANTAGES AND DISADVANTAGES.  ",
        "img": img5,
        "id": 5
    }, {
        "name": "Next Shravani from final BZC explained about’’ IMPACT OF PESTICIDES ON ARTHROPODS’’ and why limit pesticide use.",
        "img": img6,
        "id": 6 
    }, {
        "name": "M.Pavani from 2nd BZC explained about ‘’CRISPER AND ITS APPLICATIONS’’",
        "img": img7,
        "id": 7
    }, {
        "name":"The program was ended with power point presentation by final BZC Prameela",
        "img": img8,
        "id":8
    }, {
        "name":"Vice principal sir has appreciated the explanation and presentation of all the events conducted on this day.",
        "img": img9,
        "id": 9
    }, {
        "name": "National Science day celebrations",
        "img": img10,
        "id": 10
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
            <span className="relative text-blue-700">Event</span>
          </span>{' National Science Day Celebrations'}
        </h2>
        <p className="text-base text-gray-700 md:text-lg" data-aos="fade-up">
        28th February 2023 
Catalyzed  & Supported by:-
Principal Sir:-
Dr.V.Venkateshwar Rao Garu
Organized by:-
Department of Zoology:-
Mrs.M.Srilatha 
Degree lecturer(H.O.D)Zoology
National science day was celebrated by department of science to mark the honors and discovery of Raman Effect. We the department of zoology in collaboration with other science departments have celebrated this day to inculcate scientific thinking in students.
As a part of this celebration various programs were conducted in zoology laboratory which was started from 10am onwards with the theme ‘’GLOBAL SCIENCE FOR GLOBAL WELL BEING’’




        </p>
      </div>
        <div className='flex flex-col justify-evenly '>
          <div className="flex flex-wrap justify-around items-center p-2">
            {demoEvents.map((Events) => (
              <div key={Events.id} className="mb-4 w-full flex justify-center md:w-1/3 px-2">
                <LabCard name={Events.name} img={Events.img} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Events