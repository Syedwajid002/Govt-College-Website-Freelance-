
import React from "react";

const data = [
    {
    'S.No': 1,
    'Name of the student': "V.SHIVANI",
    'Course Studied': "B.COM CA",
    'Name of the University/Institution': "HYDERABAD CENTRAL UNIVERSITY",
    'PG subject': "MBA",
 }, {
    'S.No': 2,
    'Name of the student': "K.ARCHANA",
    'Course Studied': "B.COM CA",
    'Name of the University/Institution': "HYDERABAD CENTRAL UNIVERSITY",
    'PG subject': "MBA",
 }, {
    'S.No': 3,
    'Name of the student': "SAI SUPRIYA",
    'Course Studied': "B.COM CA",
    'Name of the University/Institution': "HYDERABAD CENTRAL UNIVERSITY",
    'PG subject': "M.A. TELUGU",
 }, {
    'S.No': 4,
    'Name of the student': "LIKITHA",
    'Course Studied': "MPC",
    'Name of the University/Institution': "NIT, MEGHALAYA",
    'PG subject': "M.SC CHEMISTRY",
 }, {
    'S.No': 5,
    'Name of the student': "PAVANI",
    'Course Studied': "MSCS",
    'Name of the University/Institution': "HYDERABAD CENTRAL UNIVERSITY",
    'PG subject': "M.SC STATISTICS",
 }, {
    'S.No': 6,
    'Name of the student': "VEMULA SINDHUJA",
    'Course Studied': "MSCS",
    'Name of the University/Institution': "CENTRAL UNIVERSITY RAJASTHAN",
    'PG subject': "M.SC STATISTICS",
 }, {
    'S.No': 7,
    'Name of the student': "N.HARSHITHA",
    'Course Studied': "MPCS",
    'Name of the University/Institution': "PONDICHERRY CENTRAL UNIVERSITY",
    'PG subject': "M.SC COMPUTER SCIENCE",
 }, {
    'S.No': 8,
    'Name of the student': "G. AKANSHA",
    'Course Studied': "MPC",
    'Name of the University/Institution': "MIRANDA HOUSE, DELHI UNIVERSITY",
    'PG subject': "M.SC PHYSICS",
 }, {
    'S.No': 9,
    'Name of the student': "SUMMAIYA BEGUM",
    'Course Studied': "B.COM CA",
    'Name of the University/Institution': "INSTITUTE OF PUBLIC ENTERPRISE, HYDERABAD",
    'PG subject': "MBA",
 }, {
    'S.No': 10,
    'Name of the student': "D.SUMANITHA",
    'Course Studied': "B.COM CA",
    'Name of the University/Institution': "HYDERABAD CENTRAL UNIVERSITY",
    'PG subject': "MBA",
 }, {
    'S.No': 11,
    'Name of the student': "MAHESHWARI",
    'Course Studied': "B.Com (CA)",
    'Name of the University/Institution': "CENTRAL UNIVERSITY PUNJAB",
    'PG subject': "PG IN ENGLISH DEPT",
 }, {
    'S.No': 12,
    'Name of the student': "M.PRASHANTHI",
    'Course Studied': "B.Com (CA)",
    'Name of the University/Institution': "CENTRAL UNIVERSITY PONDICHERRY",
    'PG subject': "PG IN MATHS DEPT.",
 }, {
    'S.No': 13,
    'Name of the student': "P.SHILPA",
    'Course Studied': "MSCS",
    'Name of the University/Institution': "NIT DELHI",
    'PG subject': "MBA IN STATISTICS",
 }, {
    'S.No': 14,
    'Name of the student': "SHIVALEELA",
    'Course Studied': "B.COM CA",
    'Name of the University/Institution': "HYDERABAD CENTRAL UNIVERSITY",
    'PG subject': "MBA",
 }, {
    'S.No': 15,
    'Name of the student': "SWATHI KONGARI",
    'Course Studied': "B.COM CA",
    'Name of the University/Institution': "CENTRAL UNIVERSITY PONDICHERRY",
    'PG subject': "MA ECONOMICS",
 }, {
    'S.No': 16,
    'Name of the student': "SHILPA GAYAKWAD",
    'Course Studied': "B.COM CA",
    'Name of the University/Institution': "REGIONAL COLLEGE OF MANAGEMENT, BANGLORE",
    'PG subject': "MBA IN HR",
 }, {
    'S.No': 17,
    'Name of the student': "SWETHA B",
    'Course Studied': "MSCS",
    'Name of the University/Institution': "CENTRAL UNIVERSITY PONDICHERRY",
    'PG subject': "MSC STATISTICS",
 }, {
    'S.No': 18,
    'Name of the student': "S PREETHI",
    'Course Studied': "MSCS",
    'Name of the University/Institution': "CENTRAL UNIVERSITY PONDICHERRY",
    'PG subject': "MSC STATISTICS",
 }, {
    'S.No': 19,
    'Name of the student': "P.SHIREESHA",
    'Course Studied': "B.Com (CA)",
    'Name of the University/Institution': "CENTRAL UNIVERSITY KERALA",
    'PG subject': "MSC-MATHS",
 }, {
    'S.No': 20,
    'Name of the student': "M.SHIREESHA",
    'Course Studied': "MSCS",
    'Name of the University/Institution': "AZIM PREMJI UNIVERSITY",
    'PG subject': "MA EDUCATION",
 }
];
const Ipi = () => {
    return (
  <>
    <div className="container mx-auto my-8">
    <p className="text-base text-gray-700 md:text-lg" data-aos="fade-up">
    Every academic year, students from this institution are securing a fair percentage of PG seats in various premier institutions across the country. Following is the data pertaining to the batch of 2020 – 2023.
Indian premier Institutions:
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
              <th className="border p-2">PG subject</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                <td className="border p-2">{row['S.No']}</td>
                <td className="border p-2">{row['Name of the student']}</td>
                <td className="border p-2">{row['Course Studied']}</td>
                <td className="border p-2">{row['Name of the University/Institution']}</td>
                <td className="border p-2">{row['PG subject']}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </>
    );
  };
  
  export default Ipi; 