//IpTable.jsx

import React from "react";


const data = [
  {
    'Batch': '2019 - 2022',
    'S.No': 1,
    'Student name': "Navya Kondaparthi",
    'Course': "B.Sc. MSCs",
  }
];


const Ip = () => {
    return (
  <>
    <div className="container mx-auto my-8">
    <p className="text-base text-gray-700 md:text-lg" data-aos="fade-up">
    RECRUITEES UNDER INFOR INDIA PVT. LIMITED
          </p>
          <br></br>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
            <th className="border p-2">Batch</th>
              <th className="border p-2">S.No</th>
              <th className="border p-2">Student name</th>
              <th className="border p-2">Course</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                <td className="border p-2">{row['Batch']}</td>
                <td className="border p-2">{row['S.No']}</td>
                <td className="border p-2">{row['Student name']}</td>
                <td className="border p-2">{row['Course']}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </>
    );
  };
  
  export default Ip; 