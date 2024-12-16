import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import handbook from '../../assets/handbook.docx'
import { FaCaretRight } from "react-icons/fa";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const navigate = useNavigate();

  const toggleMenu = (index) => {
    if (activeMenu === index) {
      setActiveMenu(null);
    } else {
      setActiveMenu(index);
    }
  };

  const closeMenu = () => {
    setActiveMenu(null);
  };

  const handleHomeClick = () => {
    closeMenu();
    navigate('/home');
  };

  const handleHistoryClick = () => {
    closeMenu();
    navigate('/about');
  };

  return (
    <div className="bg-black text-white hidden lg:block">
      <div className="container mx-auto px-4 mb-3">
        <ul className="flex justify-between text-lg">
          <li className="relative group">
            <button className="px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-blue-500 text-lg" onClick={handleHomeClick}>Home </button>
          </li>
          <li className="relative group">
            <button
              className="px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-blue-500 text-lg"
            >
              About
            </button>
            <ul className={`absolute hidden group-hover:block bg-zinc-800 text-white w-48 z-10`}>
              <li className="px-4 py-2 hover:bg-gray-700" onClick={handleHistoryClick}>History</li>
              <a href="/govbody"><li className="px-4 py-2 hover:bg-gray-700">Governing Body</li></a>
              <a href="/secretary"><li className="px-4 py-2 hover:bg-gray-700">Secretary</li></a>
              <a href="/principal"><li className="px-4 py-2 hover:bg-gray-700">Principal</li></a>
              <a href="/viceprincipal"><li className="px-4 py-2 hover:bg-gray-700">Vice Principal</li></a>
              <a href="/administration"><li className="px-4 py-2 hover:bg-gray-700">Management & Administration</li></a>
              <a href="/principals"><li className="px-4 py-2 hover:bg-gray-700">Former Principals</li></a>
              <li className="px-4 py-2 hover:bg-gray-700">Visitor’s note</li>
            </ul>
          </li>
          <li className="relative group">
            <button className="px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-blue-500 text-lg cursor-pointer">Academics </button>
            <ul className="absolute hidden group-hover:block bg-zinc-800 text-white w-48 z-10 cursor-pointer">
              <li className="px-4 py-2 hover:bg-gray-700" onClick={() => navigate('/admission')}>Admissions</li>
              <li className="px-4 py-2 hover:bg-gray-700" onClick={() => navigate("/academics")}>Academic Calendar</li>
              <li className="px-4 py-2 hover:bg-gray-700" onClick={() => navigate("/research")}>Research</li>
              <li className="px-4 py-2 hover:bg-gray-700" onClick={() => navigate("/examination")}>Examination Branch</li>
            </ul>
          </li>
          <li className="relative group">
            <button className="px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-blue-500 text-lg" onClick={() => navigate("/departments")}>Department and Faculty </button>
            <ul className="absolute hidden group-hover:block bg-zinc-800 text-white w-48 z-10">
              <a href="/languages"><li className="px-4 py-2 hover:bg-gray-700 group flex flex-row items-center"><FaCaretRight /><button>Languages</button></li></a>
              <a href="/science"><li className="px-4 py-2 hover:bg-gray-700 group flex flex-row items-center"><FaCaretRight /><button>Science</button>
              </li></a>
              <a href="/arts"><li className="px-4 py-2 hover:bg-gray-700 group flex flex-row items-center"><FaCaretRight /><button>Arts</button>
              </li></a>
              <a href="/commerce">
                <li className="px-4 py-2 hover:bg-gray-700 group flex flex-row items-center"><FaCaretRight /><button>Commerce</button>
                </li>
              </a>
            </ul>
            <ul>
              {/* <li className="px-4 py-2 hover:bg-gray-700 group flex flex-row items-center"><FaCaretRight/><button>Telugu</button></li>
              <li className="px-4 py-2 hover:bg-gray-700 group flex flex-row items-center"><FaCaretRight/><button>English</button></li> */}
            </ul>

          </li>
          <li className="relative group">
            <button className="px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-blue-500 text-lg" onClick={() => navigate("/placements")}>Placements </button>
            <ul className="absolute hidden group-hover:block bg-zinc-800 text-white w-48 z-10">
              <a href="/recruitments"><li className="px-4 py-2 hover:bg-gray-700">Recruitments</li></a>
              <a href="/JobOpportunities"><li className="px-4 py-2 hover:bg-gray-700">Job Opportunities</li></a>
              <a href="/careerGuidance"><li className="px-4 py-2 hover:bg-gray-700">Career Guidance</li></a>
            </ul>
          </li>
          <li className="relative group">
            <button className="px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-blue-500 text-lg" onClick={()=>navigate("/e-resources")}>E-Resources</button>
          </li>
          <li className="relative group">
            <button className="px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-blue-500 text-lg" onClick={() => navigate("/mou")}>MOU </button>
          </li>
          <li className="relative group">
            <button className="px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-blue-500 text-lg">IQAC</button>
            <ul className="absolute hidden group-hover:block bg-zinc-800 text-white w-48 z-10">
              <li className="px-4 py-2 hover:bg-gray-700">IQAC Body</li>
              <li className="px-4 py-2 hover:bg-gray-700">UGC</li>
              <li className="px-4 py-2 hover:bg-gray-700">NIRF</li>
              <li className="px-4 py-2 hover:bg-gray-700">NAAC</li>
              <li className="px-4 py-2 hover:bg-gray-700">Meeting Minutes</li>
              <a href="/best"><li className="px-4 py-2 hover:bg-gray-700">Best Practices</li></a>
              <li className="px-4 py-2 hover:bg-gray-700">Feedback</li>
            </ul>
          </li>
          <a href="/knowledge_exploring">
            <li className="relative group">
              <button className="px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-blue-500 text-lg" onClick={() => navigate("/knowledge_exploring")}>Knowledge Exploring</button>
            </li>
          </a>
          {/* <li className="relative group">
            <button className="px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-blue-500 text-lg">Job Training</button>
          </li> */}
        </ul>
      </div >
    </div >
  );
}
