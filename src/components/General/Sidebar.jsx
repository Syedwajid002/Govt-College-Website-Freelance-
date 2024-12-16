import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import handbook from "../../assets/handbook.docx";

export default function Sidebar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const navigate = useNavigate();

  const toggleMenu = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  const closeMenu = () => {
    setActiveMenu(null);
  };

  const toogleSidebar = () => {
    document.getElementById("sidebar").style.marginLeft = "-270px";
  };

  return (
    <div
      className="bg-black text-white h-screen w-64 absolute z-30 transition-all"
      id="sidebar"
      style={{
        marginLeft: -270,
      }}
    >
      <div className="py-4">
        <div className="flex flex-row justify-end pr-3">
          <IoCloseSharp size={30} onClick={toogleSidebar} />
        </div>
        <ul>
          <li className="relative group">
            <button
              className="px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-blue-500 text-lg"
              onClick={() => toggleMenu(1)}
            >
              Home
            </button>
            {activeMenu === 1 && (
              <ul className="absolute bg-zinc-800 text-white w-48 z-10">
                <li className="px-4 py-2 hover:bg-gray-700">
                  <NavLink to="/home" onClick={closeMenu}>
                    Home
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li className="relative group">
            <button
              className="px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-blue-500 text-lg"
              onClick={() => toggleMenu(2)}
            >
              About
            </button>
            {activeMenu === 2 && (
              <ul className="absolute bg-zinc-800 text-white w-48 z-10">
                <li className="px-4 py-2 hover:bg-gray-700">
                  <NavLink to="/about" onClick={closeMenu}>
                    About
                  </NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                  <NavLink to="/about" onClick={closeMenu}>
                    History
                  </NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                  <NavLink to="/govbody" onClick={closeMenu}>
                    Governing Body
                  </NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                  <NavLink to="/secretary" onClick={closeMenu}>
                    Secretary
                  </NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                  <NavLink to="/" onClick={closeMenu}>
                    Principal
                  </NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                  <NavLink to="/" onClick={closeMenu}>
                    Vice Principal
                  </NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                  <NavLink to="/administration" onClick={closeMenu}>
                    Management & Administration
                  </NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                  <NavLink to="/principals" onClick={closeMenu}>
                    Former Principals
                  </NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                  <NavLink to="/" onClick={closeMenu}>
                    Visitor's note
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li className="relative group">
            <button
              className="px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-blue-500 text-lg"
              onClick={() => toggleMenu(3)}
            >
              Academics
            </button>
            {activeMenu === 3 && (
              <ul className="absolute bg-zinc-800 text-white w-48 z-10">
                <li className="px-4 py-2 hover:bg-gray-700">
                  <NavLink to="/admission" onClick={closeMenu}>
                    Admissions
                  </NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                  <NavLink to="/academics" onClick={closeMenu}>
                    Academic Calendar
                  </NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                  <NavLink to="/research" onClick={closeMenu}>
                    Research
                  </NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                  <NavLink to="/academics" onClick={closeMenu}>
                    Examination Details
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li className="relative group">
            <button
              className="px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-blue-500 text-lg"
              onClick={() => toggleMenu(4)}
            >
              Department & Faculty
            </button>
            {activeMenu === 4 && (
              <ul className="absolute bg-zinc-800 text-white w-48 z-10">
                <li className="px-4 py-2 hover:bg-gray-700">
                  <NavLink to="/departments" onClick={closeMenu}>
                    Departments
                  </NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                  <NavLink to="/departments" onClick={closeMenu}>
                    About Faculty
                  </NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                  <NavLink to="/languages" onClick={closeMenu}>
                    Languages
                  </NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                  <NavLink to="/science" onClick={closeMenu}>
                    Science
                  </NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                  <NavLink to="/arts" onClick={closeMenu}>
                    Arts
                  </NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                  <NavLink to="/commerce" onClick={closeMenu}>
                    Commerce
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li className="relative group">
            <button
              className="px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-blue-500 text-lg"
              onClick={() => toggleMenu(5)}
            >
              Placements
            </button>
            {activeMenu === 5 && (
              <ul className="absolute bg-zinc-800 text-white w-48 z-10">
                <li className="px-4 py-2 hover:bg-gray-700">
                  <NavLink to="/placements" onClick={closeMenu}>
                    Placements
                  </NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                  <NavLink to="/recruitments" onClick={closeMenu}>
                    Recruitments
                  </NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                  <NavLink to="/JobOpportunities" onClick={closeMenu}>
                    Job Opportunities
                  </NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                  <NavLink to="/careerGuidance" onClick={closeMenu}>
                    Career Guidance
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li className="relative group">
            <button
              className="px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-blue-500 text-lg"
              onClick={() => toggleMenu(6)}
            >
              Benefits of MJP
            </button>
            {activeMenu === 6 && (
              <ul className="absolute bg-zinc-800 text-white w-48 z-10">
                <li className="px-4 py-2 hover:bg-gray-700">
                  <NavLink to="/" onClick={closeMenu}>
                    Cosmetics
                  </NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                  <NavLink to="/" onClick={closeMenu}>
                    Uniforms
                  </NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                  <NavLink to="/" onClick={closeMenu}>
                    Track
                  </NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                  <NavLink to="/" onClick={closeMenu}>
                    Shoes
                  </NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                  <NavLink to="/" onClick={closeMenu}>
                    Examination Kit
                  </NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                  <a href={handbook}>Download HandBook</a>
                </li>
              </ul>
            )}
          </li>
          <li className="relative group">
            <button
              className="px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-blue-500 text-lg"
              onClick={() => toggleMenu(7)}
            >
              MOU
            </button>
            {activeMenu === 7 && (
              <ul className="absolute bg-zinc-800 text-white w-48 z-10">
                <li className="px-4 py-2 hover:bg-gray-700">
                  <NavLink to="/mou" onClick={closeMenu}>
                    MOU
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li className="relative group">
            <button
              className="px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-blue-500 text-lg"
              onClick={() => toggleMenu(8)}
            >
              IQAC
            </button>
            {activeMenu === 8 && (
              <ul className="absolute bg-zinc-800 text-white w-48 z-10">
                <li className="px-4 py-2 hover:bg-gray-700">
                  <NavLink to="/" onClick={closeMenu}>
                    IQAC Body
                  </NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                  <NavLink to="/" onClick={closeMenu}>
                    UGC
                  </NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                  <NavLink to="/" onClick={closeMenu}>
                    NIRF
                  </NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                  <NavLink to="/" onClick={closeMenu}>
                    NAAC
                  </NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                  <NavLink to="/" onClick={closeMenu}>
                    Meeting Minutes
                  </NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                  <NavLink to="/" onClick={closeMenu}>
                    Best Practices
                  </NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                  <NavLink to="/" onClick={closeMenu}>
                    Feedback
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li className="relative group">
            <button
              className="px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-blue-500 text-lg"
              onClick={() => {
                toggleMenu(7);
                navigate("/knowledge_exploring");
              }}
            >
              Knowledge Exploring
            </button>
            {activeMenu === 7 && (
              <ul className="absolute bg-zinc-800 text-white w-48 z-10"></ul>
            )}
          </li>
          <li className="relative group">
            <button
              className="px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-blue-500 text-lg"
              onClick={() => toggleMenu(7)}
            >
              Job Training
            </button>
            {activeMenu === 7 && (
              <ul className="absolute bg-zinc-800 text-white w-48 z-10"></ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
