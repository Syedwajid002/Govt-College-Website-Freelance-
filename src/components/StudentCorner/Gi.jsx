//Gi.jsx

import React from "react";


const data = [
  {
    'S.No': 1,
    'Name of the student': "AARE SRIJA",
    'Course Studied': " B.SC. MPCS",
    'Name of the University/Institution': " SACRED HEART UNIVERSITY – LUXEMBOURG",
    'PG Subject': "MSC.COMPUTER SCIENCE",
  }, {
    'S.No': 4,
    'Name of the student': "LELLA SWAPNA",
    'Course Studied': "B.SC. MSCS",
    'Name of the University/Institution': " AUBURN UNIVERSITY -USA",
    'PG Subject': "MSC.COMPUTER SCIENCE",
  }
]


const Gi = () => {
    return (
  <>
    <div className="container mx-auto my-8">
    <p className="text-base text-gray-700 md:text-lg" data-aos="fade-up">
    GLOBAL INSTITUITIONS:
          </p>
          <br></br>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">S.No</th>
              <th className="border p-2">Name of the student</th>
              <th className="border p-2">Course Studied</th>
              <th className="border p-2">Name of the University/Institution</th>
              <th className="border p-2">PG Subject</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                <td className="border p-2">{row['S.No']}</td>
                <td className="border p-2">{row['Name of the student']}</td>
                <td className="border p-2">{row['Course Studied']}</td>
                <td className="border p-2">{row['Name of the University/Institution']}</td>
                <td className="border p-2">{row['PG Subject']}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </>
    );
  };
  
  export default Gi; 