import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity, faStar, faRunning, faFistRaised } from '@fortawesome/free-solid-svg-icons';
import annualday from '../cards/Home/annualday.jpg';
import collegepic from '../cards/Home/collegepic.JPG';
import karate from '../cards/Home/karate.JPG';
import sportspic from '../cards/Home/sportspic.JPG';

const generateRandomDescription = (category) => {
  let description = "";
  switch (category) {
    case "College":
      description = "A prestigious institution fostering excellence!";
      break;
    case "Annual Day":
      description = "An annual extravaganza filled with joy and excitement!";
      break;
    case "Independence Day":
      description = "An exhilarating showcase of athleticism!";
      break;
    case "Karate":
      description = "Experience the discipline and power of martial arts!";
      break;
    default:
      description = "Explore the beauty of diversity!";
  }
  return description;
};

export default function Widget() {
  return (
    <div className="bg-zinc-800 text-white min-h-screen flex items-center justify-center">
      <div className="flex flex-wrap justify-center gap-8">
    
        <div className="relative flex-shrink-0">
          <div className="flip-card" style={{ width: '300px' }}>
            <div className="flip-card-inner">
              <div className="flip-card-front flex flex-col items-center justify-center p-4 bg-zinc-700 rounded-lg">
                <FontAwesomeIcon icon={faUniversity} size="3x" className="mb-2" />
                <p className="mt-2 font-semibold text-blue-500 uppercase">College</p>
                <p className="mt-2">{generateRandomDescription("College")}</p>
              </div>
              <div className="flip-card-back flex items-center justify-center p-4 bg-zinc-900 rounded-lg">
                <img src={collegepic} alt="College Image" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex-shrink-0">
          <div className="flip-card" style={{ width: '300px' }}>
            <div className="flip-card-inner">
              <div className="flip-card-front flex flex-col items-center justify-center p-4 bg-zinc-700 rounded-lg">
                <FontAwesomeIcon icon={faStar} size="3x" className="mb-2" />
                <p className="mt-2 font-semibold text-green-500 uppercase">Independence Day</p>
                <p className="mt-2">{generateRandomDescription("Annual Day")}</p>
              </div>
              <div className="flip-card-back flex items-center justify-center p-4 bg-zinc-900 rounded-lg">
                <img src={annualday} alt="Annual Day Image" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex-shrink-0">
          <div className="flip-card" style={{ width: '300px' }}>
            <div className="flip-card-inner">
              <div className="flip-card-front flex flex-col items-center justify-center p-4 bg-zinc-700 rounded-lg">
                <FontAwesomeIcon icon={faRunning} size="3x" className="mb-2" />
                <p className="mt-2 font-semibold text-yellow-500 uppercase">Sports Day</p>
                <p className="mt-2">{generateRandomDescription("Sports Day")}</p>
              </div>
              <div className="flip-card-back flex items-center justify-center p-4 bg-zinc-900 rounded-lg">
                <img src={sportspic} alt="Sports Day Image" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex-shrink-0">
          <div className="flip-card" style={{ width: '300px' }}>
            <div className="flip-card-inner">
              <div className="flip-card-front flex flex-col items-center justify-center p-4 bg-zinc-700 rounded-lg">
                <FontAwesomeIcon icon={faFistRaised} size="3x" className="mb-2" />
                <p className="mt-2 font-semibold text-purple-500 uppercase">Karate</p>
                <p className="mt-2">{generateRandomDescription("Karate")}</p>
              </div>
              <div className="flip-card-back flex items-center justify-center p-4 bg-zinc-900 rounded-lg">
                <img src={karate} alt="Karate Image" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

      </div>

      <style>
        {`
          .flip-card {
            background-color: transparent;
            width: 300px;
            height: 400px;
            perspective: 1000px;
          }

          .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            text-align: center;
            transition: transform 0.6s;
            transform-style: preserve-3d;
            cursor: pointer;
          }

          .flip-card:hover .flip-card-inner {
            transform: rotateY(180deg);
          }

          .flip-card-front, .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
          }

          .flip-card-back {
            transform: rotateY(180deg);
          }
        `}
      </style>
    </div>
  );
}
