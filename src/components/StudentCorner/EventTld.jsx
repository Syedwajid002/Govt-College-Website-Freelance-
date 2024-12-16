import React from 'react'

import LabCard from '../cards/Campus/LabCard'

import img1 from "../img/tld1.jpg"
import img2 from "../img/tld2.jpg"
import img3 from "../img/tld3.jpg"
import img4 from "../img/tld4.jpg"
import img5 from "../img/tld5.jpg"


const EventTld = () => {

  let demoEventTld = [
    {
      "name": "TELUGU BHAASHA DINOTSAVAM",
      "img": img1,
      "id": 1
    }, {
      "name": "TELUGU BHAASHA DINOTSAVAM",
      "img": img2,
      "id": 2
    }, {
        "name": "TELUGU BHAASHA DINOTSAVAM",
        "img": img3,
        "id": 3
    }, {
        "name": "TELUGU BHAASHA DINOTSAVAM",
        "img": img4,
        "id": 4
    }, {
        "name": "TELUGU BHAASHA DINOTSAVAM",
        "img": img5,
        "id": 5
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
          </span>{' TELUGU BHAASHA DINOTSAVAM - 29/08/2022'}
        </h2>
        <p className="text-base text-gray-700 md:text-lg" data-aos="fade-up">
        29 ఆగస్టు 2022 న  "తెలుగు భాషా దినోత్సవం" సందర్భంగా కళాశాలలో నిర్వహించిన కార్యక్రమం.

వాడుక భాష ఉద్యమానికి ఆద్యులు, బహుముఖ ప్రజ్ఞాశాలి గిడుగు రామ్మూర్తి జయంతి (ఆగస్టు 29) సందర్భంగా తెలుగు భాషా దినోత్సవాన్ని జరుపుకోవడం అందరికీ తెలిసిందే. తెలుగు సాహిత్యాన్ని సరళీకరించి, తెలుగు తీయదనాన్ని సామాన్యుడికి చేరువ చేసేందుకు ఆయన ఎనలేని కృషి చేశారు. ఆయన అందించిన విశిష్ట సేవలకు గుర్తుగా  గిడుగు రామ్మూర్తి జయంతి అయిన ఆగస్టు 29 న "మాతృ భాషా దినోత్సవం"గా జరుపుకోవడం జరుగుతుంది.


        </p>
      </div>
        <div className='flex flex-col justify-evenly '>
          <div className="flex flex-wrap justify-around items-center p-2">
            {demoEventTld.map((EventTld) => (
              <div key={EventTld.id} className="mb-4 w-full flex justify-center md:w-1/3 px-2">
                <LabCard name={EventTld.name} img={EventTld.img} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default EventTld