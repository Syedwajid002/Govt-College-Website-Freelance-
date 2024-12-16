import React from "react";

const data = [
    {
      'S.No': 1,
      'Programmes offered with Combination': "B.A (EPH)-Economics, Political Science, History ",
      'No. of seats': '40',
 }, {
    'S.No': 2,
    'Programmes offered with Combination': "B.A (HPE)-History, Political Science, English Modern Language",
    'No. of seats': '20',
 }, {
  'S.No': 3,
    'Programmes offered with Combination': "B.Com(Gen)-General ",
    'No. of seats': '30',
 }, {
  'S.No': 4,
    'Programmes offered with Combination': "B.Com (CA)-Computer Applications",
    'No. of seats': '40',
 }, {
  'S.No': 5,
    'Programmes offered with Combination': "B.Com(BA)-Business Analytics",
    'No. of seats': '30',
 }, {
  'S.No': 6,
    'Programmes offered with Combination': "B.Sc.(MPC)-Math, Physics, Chemistry",
    'No. of seats': '40',
 }, {
  'S.No': 7,
    'Programmes offered with Combination': "B.Sc.(MPCS)-Math, Physics, Computer Science",
    'No. of seats': '40',
 }, {
  'S.No': 8,
    'Programmes offered with Combination': "B.Sc.(MSCS)-Math, Statistics, Computer Science ",
    'No. of seats': '40',
 }, {
  'S.No': 9,
    'Programmes offered with Combination': "B.Sc. (MSDS)-Math, Statistics, Data Science",
    'No. of seats': '40',
 }, {
  'S.No': 10,
    'Programmes offered with Combination': "B.Sc.(BZC)-Botany, Zoology, Chemistry",
    'No. of seats': '40',
 }, {
  'S.No': 11,
    'Programmes offered with Combination': "B.Sc.(BTBCC)-Biotechnology,Biochemistry,Chemistry",
    'No. of seats': '40',
 }
];
const Course = () => {
    return (
  <>
    <div className="container mx-auto my-8">
    <h2 className="text-4xl font-bold mb-4 text-center text-blue-700 p-10">Programmes offered </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-white">
              <th className="border p-2">S.No</th>
              <th className="border p-2">Programmes offered with Combination</th>
              <th className="border p-2">No. of seats</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-blue-100' : ''}>
                <td className="border p-2">{row['S.No']}</td>
                <td className="border p-2">{row['Programmes offered with Combination']}</td>
                <td className="border p-2">{row['No. of seats']}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </>
    );
  };
  
  export default  Course; 
