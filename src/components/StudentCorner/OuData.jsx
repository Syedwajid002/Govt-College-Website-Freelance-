//OuData.jsx

import React from "react";


const data = [
  {
    'S.No': 1,
    'Name of the Canditate': "K.Ashwini",
    'Course Studied in UG': "BZC",
    'Master Degree in subject': "Zoology",
    'Rank Secured': '1',
  }, {
    'S.No': 2,
    'Name of the Canditate': "S.Manodhya",
    'Course Studied in UG': " BTBCC",
    'Master Degree in subject': "Biochemistry",
    'Rank Secured': '4',
  }, {
    'S.No': 3,
    'Name of the Canditate': "Lokini Pravalika",
    'Course Studied in UG': " MSCs",
    'Master Degree in subject': "Computer Science",
    'Rank Secured': '5',
  }, {
    'S.No': 4,
    'Name of the Canditate': "Kinnera Sandhya",
    'Course Studied in UG': " BTBCC",
    'Master Degree in subject': "Biochemistry",
    'Rank Secured': '12',
  }, {
    'S.No': 5,
    'Name of the Canditate': "Sai Supriya",
    'Course Studied in UG': " B.Com. CA",
    'Master Degree in subject': "Telugu",
    'Rank Secured': '19',
  }, {
    'S.No': 6,
    'Name of the Canditate': "Y.Priyanka",
    'Course Studied in UG': " MPCs",
    'Master Degree in subject': "Mathematics",
    'Rank Secured': '22',
  }, {
    'S.No': 7,
    'Name of the Canditate': "M.Anusha",
    'Course Studied in UG': " BZC",
    'Master Degree in subject': "Zoology",
    'Rank Secured': '25',
  }, {
    'S.No': 8,
    'Name of the Canditate': "Pagidimarry Akhila",
    'Course Studied in UG': "MPCS",
    'Master Degree in subject': "Physics",
    'Rank Secured': '38',
  }, {
    'S.No': 9,
    'Name of the Canditate': "M.Nikitha",
    'Course Studied in UG': " B.A.EPH",
    'Master Degree in subject': "Human Resource Management",
    'Rank Secured': '43',
  }, {
    'S.No': 10,
    'Name of the Canditate': "S.Manodhya",
    'Course Studied in UG': " BTBCC",
    'Master Degree in subject': "Biotechnology",
    'Rank Secured': '46',
  }, {
    'S.No': 11,
    'Name of the Canditate': "K.Chandana Keerthi",
    'Course Studied in UG': "MSCs ",
    'Master Degree in subject': "Computer Science",
    'Rank Secured': '59',
  }, {
    'S.No': 12,
    'Name of the Canditate': "G.Sandhya",
    'Course Studied in UG': " BZC",
    'Master Degree in subject': "Zoology",
    'Rank Secured': '74',
  }, {
    'S.No': 13,
    'Name of the Canditate': "M.Kalyani",
    'Course Studied in UG': " BTBCC",
    'Master Degree in subject': "Biochemistry",
    'Rank Secured': '81',
  }, {
    'S.No': 14,
    'Name of the Canditate': "D.Varshitha",
    'Course Studied in UG': "BZC",
    'Master Degree in subject': "Zoology",
    'Rank Secured': '110',
  }, {
    'S.No': 15,
    'Name of the Canditate': "M.Shivani",
    'Course Studied in UG': " MPCs",
    'Master Degree in subject': "Computer Science",
    'Rank Secured': '114',
  }, {
    'S.No': 16,
    'Name of the Canditate': "M.Nikitha",
    'Course Studied in UG': " B.A.EPH",
    'Master Degree in subject': "Economics",
    'Rank Secured': '150',
  }, {
    'S.No': 17,
    'Name of the Canditate': "M.Kalyani",
    'Course Studied in UG': " BZC",
    'Master Degree in subject': "Botany",
    'Rank Secured': '157',
  }, {
    'S.No': 18,
    'Name of the Canditate': "B.Anusha",
    'Course Studied in UG': " MPCs",
    'Master Degree in subject': "Mathematics",
    'Rank Secured': '163',
  }, 
]


const OuData = () => {
    return (
  <>
    <div className="container mx-auto my-8">
    <p className="text-base text-gray-700 md:text-lg" data-aos="fade-up">
    OU CPGET-2023 STUDENTS DATA:
          </p>
          <br></br>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">S.No</th>
              <th className="border p-2">Name of the Canditate</th>
              <th className="border p-2">Course Studied in UG</th>
              <th className="border p-2">Master Degree in subject</th>
              <th className="border p-2">Rank Secured</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                <td className="border p-2">{row['S.No']}</td>
                <td className="border p-2">{row['Name of the Canditate']}</td>
                <td className="border p-2">{row['Course Studied in UG']}</td>
                <td className="border p-2">{row['Master Degree in subjec']}</td>
                <td className="border p-2">{row['Rank Secured']}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </>
    );
  };
  
  export default OuData; 