// HigherEdTable.jsx

import React from "react"

const data = [
    {
        'S.no': '1',
        'Name of the University/Institution': "HYDERABAD CENTRAL UNIVERSITY",
        'Total No. of Admissions': '12',
    }, {
        'S.no': '2',
        'Name of the University/Institution': "CENTRAL UNIVERSITY, PONDICHERRY",
        'Total No. of Admissions': '13',
    }, {
        'S.no': '3',
        'Name of the University/Institution': "CENTRAL UNIVERSITY, RAJASTHAN",
        'Total No. of Admissions': '1',
    }, {
        'S.no': '4',
        'Name of the University/Institution': "CENTRAL UNIVERSITY, PUNJAB",
        'Total No. of Admissions': '2',
    }, {
        'S.no': '5',
        'Name of the University/Institution': "CENTRAL UNIVERSITY, KERALA",
        'Total No. of Admissions': '2',
    }, {
        'S.no': '6',
        'Name of the University/Institution': "NIT, DELHI",
        'Total No. of Admissions': '2',
    }, {
        'S.no': '7',
        'Name of the University/Institution': "NIT, PONDICHERRY",
        'Total No. of Admissions': '1',
    }, {
        'S.no': '8',
        'Name of the University/Institution': "AZIM PREMJI UNIVERSITY",
        'Total No. of Admissions': '2',
    }, {
        'S.no': '9',
        'Name of the University/Institution': "REGIONAL COLLEGE OF EDUCATION, BANGALORE",
        'Total No. of Admissions': '2',
    },
];

const HigherEd = () => {
  return (
<>
  <div className="container mx-auto my-8">
    <h2 className="text-4xl font-bold mb-4 text-center text-blue-700 p-10">Higher Education</h2>
    <p className="text-base text-gray-700 md:text-lg" data-aos="fade-up">
    A student Ramgiri Sai Supriya of batch 2020-2023 from B.Com. Computer Applications has bagged JRF and Lectureship through UGC – NET December 2023 in the subject Telugu. This has marked the beginning of our students’ long and glorious journey in the national level professional qualification tests.
Our Students have spread our reputation to various notable Institutions in the country by pursuing PG in IIMs, NITs, Regional College of Education Bangalore, Central Universities-Hyderabad, Rajasthan, Punjab, Pondicherry, Kerala, Azim Premji University and various state Universities.
Following is the consolidated data of our students from its I outgoing batch 2018 till 2021. <br></br>
        </p>
        <br></br>

    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">S.no</th>
            <th className="border p-2">Name of the University/Institution</th>
            <th className="border p-2">Total No. of Admissions </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className="border p-2">{row['S.no']}</td>
              <td className="border p-2">{row['Name of the University/Institution']}</td>
              <td className="border p-2">{row['Total No. of Admissions']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</>

  )
}

export default HigherEd;