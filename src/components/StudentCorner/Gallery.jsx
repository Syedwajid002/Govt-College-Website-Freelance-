import React from 'react'

import LabCard from '../cards/Campus/LabCard'

import img1 from "../img/g1.jpg"
import img2 from "../img/g2.jpg"
import img3 from "../img/g3.jpg"
import img4 from "../img/g4.jpg"
import img5 from "../img/g5.jpg"
import img6 from "../img/g6.jpg"
import img7 from "../img/g7.jpg"
import img8 from "../img/g8.jpg"
import img9 from "../img/g9.jpg"
import img10 from "../img/g10.jpg"
import img11 from "../img/g11.jpg"
import img12 from "../img/g12.jpg"
import img13 from "../img/g13.jpg"
import img14 from "../img/g14.jpg"
import img15 from "../img/g15.jpg"
import img16 from "../img/g16.jpg"
import img17 from "../img/g17.jpg"
import img18 from "../img/g18.jpg"
import img19 from "../img/g19.jpg"
import img20 from "../img/g20.jpg"
import img21 from "../img/g21.jpg"
import img22 from "../img/g22.jpg"
import img23 from "../img/g23.jpg"
import img24 from "../img/g24.jpg"
import img25 from "../img/g25.jpg"
import img26 from "../img/g26.jpg"
import img27 from "../img/g27.jpg"
import img28 from "../img/g28.jpg"
import img29 from "../img/g29.jpg"

const Gallery = () => {
  function importAll(r) {
    return r.keys().map(r);
  }
  const images = importAll(require.context('../pics/', false, /\.(png|jpe?g|svg)$/));
  console.log(images)
  let demoGallery = [
    {
      "img": img1,
      "id": 1
    }, {
      "img": img2,
      "id": 2
    },{
      "img": img3,
      "id": 3
    }, {
        "img": img4,
        "id": 4
    }, {
        "img": img5,
        "id": 5
    }, {
        "img": img6,
        "id": 6
    }, {
        "img": img7,
        "id": 7
    }, {
        "img": img8,
        "id": 8
    }, {
        "img": img9,
        "id": 9
    }, {
        "img": img10,
        "id": 10
    }, {
        "img": img11,
        "id": 11
    }, {
        "img": img12,
        "id": 12
    }, {
        "img": img13,
        "id": 13
    }, {
        "img": img14,
        "id": 14
    }, {
        "img": img15,
        "id": 15
    }, {
        "img": img16,
        "id": 16
    }, {
        "img": img17,
        "id": 17
    }, {
        "img": img18,
        "id": 18
    }, {
        "img": img19,
        "id": 19
    }, {
        "img": img20,
        "id": 20
    }, {
        "img": img21,
        "id": 21
    }, {
        "img": img22,
        "id": 22
    }, {
        "img": img23,
        "id": 23
    }, {
        "img": img24,
        "id": 24
    }, {
        "img": img25,
        "id": 25
    }, {
        "img": img26,
        "id": 26
    }, {
        "img": img27,
        "id": 27
    }, {
        "img": img28,
        "id": 28
    }, {
        "img": img29,
        "id": 29
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
            <span className="relative text-blue-700">Gallery</span>
          </span>{' '}
        </h2>
      </div>
        <div className='flex flex-col justify-evenly '>
          <div className="flex flex-wrap justify-around items-center p-2">
            {demoGallery.map((Gallery) => (
              <div key={Gallery.id} className="mb-4 w-full flex justify-center md:w-1/3 px-2">
                <LabCard name={Gallery.name} img={Gallery.img} />
              </div>
            ))}
          </div>
          <div className='flex flex-col justify-evenly '>
          <div className="flex flex-wrap justify-around items-center p-2">
            {images.map((item) => (
              <div key={item.id} className="mb-4 w-full flex justify-center md:w-1/3 px-2">
                <LabCard img={item} />
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Gallery
