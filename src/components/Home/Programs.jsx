import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default function Widget() {
  return (
    <div className="bg-black text-white mt-5">
      <div className="container mx-auto px-4">
        <div className="py-1">
          <ul className="justify-between text-sm flex flex-row flex-wrap items-center">
            <li className="group relative">
              <Link smooth to='/programs&Events'>
                <button className="px-4 transition-colors duration-300 ease-in-out hover:bg-blue-500 text-lg">Programmes & Events </button>
              </Link>
              <div className="absolute hidden group-hover:block bg-black z-10">
                <Link smooth to='/programs#National' className="block px-4 py-2 hover:bg-zinc-800">National Seminar</Link>
                <Link smooth to='/programs#International' className="block px-4 py-2 hover:bg-zinc-800">International Women Day</Link>
                <Link smooth to='/programs#karnatak' className="block px-4 py-2 hover:bg-zinc-800">Karnataka Team</Link>
                <Link smooth to='/programs#Annual' className="block px-4 py-2 hover:bg-zinc-800">Annual Day</Link>
                <Link smooth to='/programs#Freshers' className="block px-4 py-2 hover:bg-zinc-800">Freshers Day</Link>
              </div>
            </li>
            <Link smooth to='/Nss'>
              <button className="py-2 transition-colors duration-300 ease-in-out hover:bg-blue-500 text-lg">NSS Programmes</button>
            </Link>
            <li className="group relative">
              <Link smooth to='/computer#Hackathon'>
                <button className="px-4 transition-colors duration-300 ease-in-out hover:bg-blue-500 text-lg">Computer Events </button>
              </Link>
              <div className="absolute hidden group-hover:block bg-black -mt-1 z-10">
                <Link smooth to='/computer#Hackathon' className="block px-4 py-2 hover:bg-zinc-800">Hackathon</Link>
                <Link smooth to='/computer#Cyber' className="block px-4 py-2 hover:bg-zinc-800">Cyber Security workshop</Link>
                <Link smooth to='/computer#Iit' className="block px-4 py-2 hover:bg-zinc-800">IIT</Link>
                <Link smooth to='/computer#Hub' className="block px-4 py-2 hover:bg-zinc-800">T-Hub</Link>
              </div>
            </li>
              <Link to='/Notifications'>
                <button className="px-4 transition-colors duration-300 ease-in-out rounded-md bg-red-600 text-yellow-200 hover:bg-blue-500 text-lg">Notifications</button>
              </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
