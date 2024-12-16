
import React from "react";
import { HalfPageBanner } from '../components/General/Half';

const data = [
    {
      'Academic Year': '2015 - 2018',
      'Group': 'B.A.',
      'No. of Students Appeared': 14,
      'No. of Students Passed': 14,
      'Pass Percentage': '100%',
      'Name of the Topper': 'G.Swathi',
      'Percentage/CGPA': '81.08%',
    },
    {
      'Academic Year': '2015 - 2018',
      'Group': 'B.Com [Gen]',
      'No. of Students Appeared': 19,
      'No. of Students Passed': 19,
      'Pass Percentage': '100%',
      'Name of the Topper': 'A.Sravya',
      'Percentage/CGPA': '81.79%',
    },
    {
      'Academic Year': '2015 - 2018',
      'Group': 'B.Com [C.A]',
      'No. of Students Appeared': 31,
      'No. of Students Passed': 31,
      'Pass Percentage': '100%',
      'Name of the Topper': 'M.Sindhuja',
      'Percentage/CGPA': '88.71%',
    },
    {
      'Academic Year': '2015 - 2018',
      'Group': 'B.Sc. [B.Z.C]',
      'No. of Students Appeared': 32,
      'No. of Students Passed': 31,
      'Pass Percentage': '97%',
      'Name of the Topper': 'K.Sushma',
      'Percentage/CGPA': '90.01%',
    },
    {
      'Academic Year': '2015 - 2018',
      'Group': 'B.Sc. [M.P.C]',
      'No. of Students Appeared': 21,
      'No. of Students Passed': 21,
      'Pass Percentage': '100%',
      'Name of the Topper': 'R.Ravali',
      'Percentage/CGPA': '89.44%',
    },
    {
      'Academic Year': '2015 - 2018',
      'Group': 'B.Sc. [M.S.Cs]',
      'No. of Students Appeared': 24,
      'No. of Students Passed': 24,
      'Pass Percentage': '100%',
      'Name of the Topper': 'B.Anusha',
      'Percentage/CGPA': '92.67%',
    },
    {
      'Academic Year': '2015 - 2018',
      'Group': 'Total',
      'No. of Students Appeared': 141,
      'No. of Students Passed': 140,
      'Pass Percentage': '99.30%',
      'Name of the Topper': '',
      'Percentage/CGPA': '',
    },
    {
      'Academic Year': '2016 - 2019',
      'Group': 'B.A.',
      'No. of Students Appeared': 22,
      'No. of Students Passed': 22,
      'Pass Percentage': '100%',
      'Name of the Topper': 'P.Swapna',
      'Percentage/CGPA': '9.80%',
    },
    {
      'Academic Year': '2016 - 2019',
      'Group': 'B.Com [Gen]',
      'No. of Students Appeared': 17,
      'No. of Students Passed': 17,
      'Pass Percentage': '100%',
      'Name of the Topper': 'Ch.Apoorva',
      'Percentage/CGPA': '9.20%',
    },
    {
      'Academic Year': '2016 - 2019',
      'Group': 'B.Com [C.A]',
      'No. of Students Appeared': 32,
      'No. of Students Passed': 32,
      'Pass Percentage': '100%',
      'Name of the Topper': 'D.Sumanika',
      'Percentage/CGPA': '9.64%',
    },
    {
      'Academic Year': '2016 - 2019',
      'Group': 'B.Sc. [B.Z.C]',
      'No. of Students Appeared': 27,
      'No. of Students Passed': 25,
      'Pass Percentage': '92.60%',
      'Name of the Topper': 'G.Mounika',
      'Percentage/CGPA': '9.73%',
    },
    {
      'Academic Year': '2016 - 2019',
      'Group': 'B.Sc. [M.P.C]',
      'No. of Students Appeared': 32,
      'No. of Students Passed': 32,
      'Pass Percentage': '100%',
      'Name of the Topper': 'B.Lavanya',
      'Percentage/CGPA': '9.81%',
    },
    {
      'Academic Year': '2016 - 2019',
      'Group': 'B.Sc. [M.S.Cs]',
      'No. of Students Appeared': 34,
      'No. of Students Passed': 34,
      'Pass Percentage': '100%',
      'Name of the Topper': 'N.Roja',
      'Percentage/CGPA': '9.73%',
    },
    {
      'Academic Year': '2016 - 2019',
      'Group': 'Total',
      'No. of Students Appeared': 164,
      'No. of Students Passed': 162,
      'Pass Percentage': '98.80%',
      'Name of the Topper': '',
      'Percentage/CGPA': '',
    },
    {
      'Academic Year': '2017 - 2020',
      'Group': 'B.A.',
      'No. of Students Appeared': 17,
      'No. of Students Passed': 17,
      'Pass Percentage': '100%',
      'Name of the Topper': 'M.Rakshitha',
      'Percentage/CGPA': '9.71%',
    },
    {
      'Academic Year': '2017 - 2020',
      'Group': 'B.Com [Gen]',
      'No. of Students Appeared': 15,
      'No. of Students Passed': 15,
      'Pass Percentage': '100%',
      'Name of the Topper': 'K.Swetha',
      'Percentage/CGPA': '9.49%',
    },
    {
      'Academic Year': '2017 - 2020',
      'Group': 'B.Com [C.A]',
      'No. of Students Appeared': 34,
      'No. of Students Passed': 34,
      'Pass Percentage': '100%',
      'Name of the Topper': 'Ch.Shivaleela',
      'Percentage/CGPA': '9.72%',
    },
    {
      'Academic Year': '2017 - 2020',
      'Group': 'B.Sc. [B.Z.C]',
      'No. of Students Appeared': 30,
      'No. of Students Passed': 28,
      'Pass Percentage': '93.30%',
      'Name of the Topper': 'J.Ramya',
      'Percentage/CGPA': '9.54%',
    },
    {
      'Academic Year': '2017 - 2020',
      'Group': 'B.Sc. [M.P.C]',
      'No. of Students Appeared': 21,
      'No. of Students Passed': 21,
      'Pass Percentage': '100%',
      'Name of the Topper': 'B.Vinni',
      'Percentage/CGPA': '9.74%',
    },
    {
      'Academic Year': '2017 - 2020',
      'Group': 'B.Sc. [M.S.Cs]',
      'No. of Students Appeared': 35,
      'No. of Students Passed': 34,
      'Pass Percentage': '97.10%',
      'Name of the Topper': 'B.Swetha',
      'Percentage/CGPA': '9.62%',
    },
    {
      'Academic Year': '2017 - 2020',
      'Group': 'Total',
      'No. of Students Appeared': 152,
      'No. of Students Passed': 149,
      'Pass Percentage': '98%',
      'Name of the Topper': '',
      'Percentage/CGPA': '',
    },
    {
      'Academic Year': '2018 - 2021',
      'Group': 'B.A.',
      'No. of Students Appeared': 37,
      'No. of Students Passed': 36,
      'Pass Percentage': '97.30%',
      'Name of the Topper': 'B.Radhika',
      'Percentage/CGPA': '9.64%',
    },
    {
      'Academic Year': '2018 - 2021',
      'Group': 'B.Com [Gen]',
      'No. of Students Appeared': 34,
      'No. of Students Passed': 22,
      'Pass Percentage': '64.70%',
      'Name of the Topper': 'Ch.Navya',
      'Percentage/CGPA': '9.31%',
    },
    {
      'Academic Year': '2018 - 2021',
      'Group': 'B.Com [C.A]',
      'No. of Students Appeared': 35,
      'No. of Students Passed': 33,
      'Pass Percentage': '94.30%',
      'Name of the Topper': 'K.Poojitha',
      'Percentage/CGPA': '9.68%',
    },
    {
      'Academic Year': '2018 - 2021',
      'Group': 'B.Sc. [B.Z.C]',
      'No. of Students Appeared': 32,
      'No. of Students Passed': 32,
      'Pass Percentage': '100%',
      'Name of the Topper': 'S.Srivani',
      'Percentage/CGPA': '9.87%',
    },
    {
      'Academic Year': '2018 - 2021',
      'Group': 'B.Sc. [M.P.C]',
      'No. of Students Appeared': 36,
      'No. of Students Passed': 35,
      'Pass Percentage': '97.20%',
      'Name of the Topper': 'T.Kavya',
      'Percentage/CGPA': '9.77%',
    },
    {
      'Academic Year': '2018 - 2021',
      'Group': 'B.Sc. [M.S.Cs]',
      'No. of Students Appeared': 41,
      'No. of Students Passed': 37,
      'Pass Percentage': '90.40%',
      'Name of the Topper': 'M.RamyaSri',
      'Percentage/CGPA': '9.73%',
    },
    {
      'Academic Year': '2018 - 2021',
      'Group': 'Total',
      'No. of Students Appeared': 215,
      'No. of Students Passed': 195,
      'Pass Percentage': '90.70%',
      'Name of the Topper': '',
      'Percentage/CGPA': '',
    },
    {
      'Academic Year': '2019 - 2022',
      'Group': 'B.A.[EPH]',
      'No. of Students Appeared': 34,
      'No. of Students Passed': 34,
      'Pass Percentage': '100%',
      'Name of the Topper': 'M Sravanthi',
      'Percentage/CGPA': '9.71%',
    },
    {
      'Academic Year': '2019 - 2022',
      'Group': 'B.A.[HPE]',
      'No. of Students Appeared': 12,
      'No. of Students Passed': 12,
      'Pass Percentage': '100%',
      'Name of the Topper': 'G.Rani sri',
      'Percentage/CGPA': '9.63%',
    },
    {
      'Academic Year': '2019 - 2022',
      'Group': 'B.Com.[Gen]',
      'No. of Students Appeared': 35,
      'No. of Students Passed': 35,
      'Pass Percentage': '100%',
      'Name of the Topper': 'P.Sindhuja',
      'Percentage/CGPA': '9.77%',
    },
    {
      'Academic Year': '2019 - 2022',
      'Group': 'B.Com.[C.A]',
      'No. of Students Appeared': 32,
      'No. of Students Passed': 32,
      'Pass Percentage': '100%',
      'Name of the Topper': 'P.Mounika',
      'Percentage/CGPA': '9.59%',
    },
    {
      'Academic Year': '2019 - 2022',
      'Group': 'B.Sc. [B.Z.C]',
      'No. of Students Appeared': 34,
      'No. of Students Passed': 34,
      'Pass Percentage': '100%',
      'Name of the Topper': 'B Sreevani',
      'Percentage/CGPA': '9.77%',
    },
    {
      'Academic Year': '2019 - 2022',
      'Group': 'B.Sc.[BTBBC]',
      'No. of Students Appeared': 29,
      'No. of Students Passed': 28,
      'Pass Percentage': '96.55%',
      'Name of the Topper': 'B Alekhya',
      'Percentage/CGPA': '9.66%',
    },
    {
      'Academic Year': '2019 - 2022',
      'Group': 'B.Sc.[M.P.C]',
      'No. of Students Appeared': 31,
      'No. of Students Passed': 31,
      'Pass Percentage': '100%',
      'Name of the Topper': 'M Shravani',
      'Percentage/CGPA': '9.78%',
    },
    {
      'Academic Year': '2019 - 2022',
      'Group': 'B.Sc.[M.P.Cs]',
      'No. of Students Appeared': 36,
      'No. of Students Passed': 35,
      'Pass Percentage': '97.22%',
      'Name of the Topper': 'V Ravali',
      'Percentage/CGPA': '9.73%',
    },
    {
      'Academic Year': '2019 - 2022',
      'Group': 'B.Sc.[M.S.CS]',
      'No. of Students Appeared': 34,
      'No. of Students Passed': 34,
      'Pass Percentage': '100%',
      'Name of the Topper': 'K Nandini',
      'Percentage/CGPA': '9.59%',
    },
    {
      'Academic Year': '2019 - 2022',
      'Group': 'Total',
      'No. of Students Appeared': 277,
      'No. of Students Passed': 195,
      'Pass Percentage': '99.28%',
      'Name of the Topper': '',
      'Percentage/CGPA': '',
    },
    {
      'Academic Year': '2020 - 2023',
      'Group': 'B.A.[EPH]',
      'No. of Students Appeared': 23,
      'No. of Students Passed': 23,
      'Pass Percentage': '100%',
      'Name of the Topper': 'K.Neeraja',
      'Percentage/CGPA': '9.37',
    },
    {
      'Academic Year': '2020 - 2023',
      'Group': 'B.A.[HPE]',
      'No. of Students Appeared': 22,
      'No. of Students Passed': 22,
      'Pass Percentage': '100%',
      'Name of the Topper': 'B.Bhoomika',
      'Percentage/CGPA': '9.24',
    },
    {
      'Academic Year': '2020 - 2023',
      'Group': 'B.Com.[Gen]',
      'No. of Students Appeared': 34,
      'No. of Students Passed': 34,
      'Pass Percentage': '100%',
      'Name of the Topper': 'P.Ramya',
      'Percentage/CGPA': '9.07',
    },
    {
      'Academic Year': '2020 - 2023',
      'Group': 'B.Com.[C.A]',
      'No. of Students Appeared': 36,
      'No. of Students Passed': 35,
      'Pass Percentage': '97.22%',
      'Name of the Topper': 'V.Shivani',
      'Percentage/CGPA': '9.39',
    },
    {
      'Academic Year': '2020 - 2023',
      'Group': 'B.Sc. [B.Z.C]',
      'No. of Students Appeared': 29,
      'No. of Students Passed': 28,
      'Pass Percentage': '96.55%',
      'Name of the Topper': 'M.Kalyani',
      'Percentage/CGPA': '9.42',
    },
    {
      'Academic Year': '2020 - 2023',
      'Group': 'B.Sc.[BTBBC]',
      'No. of Students Appeared': 34,
      'No. of Students Passed': 34,
      'Pass Percentage': '100%',
      'Name of the Topper': 'R.Mounika',
      'Percentage/CGPA': '9.49',
    },
    {
      'Academic Year': '2020 - 2023',
      'Group': 'B.Sc.[M.P.C]',
      'No. of Students Appeared': 34,
      'No. of Students Passed': 34,
      'Pass Percentage': '100%',
      'Name of the Topper': 'E. Uma devi',
      'Percentage/CGPA': '9.33',
    },
    {
      'Academic Year': '2020 - 2023',
      'Group': 'B.Sc.[M.P.Cs]',
      'No. of Students Appeared': 42,
      'No. of Students Passed': 42,
      'Pass Percentage': '100%',
      'Name of the Topper': 'M.Sandhya rani',
      'Percentage/CGPA': '9.34',
    },
    {
      'Academic Year': '2020 - 2023',
      'Group': 'B.Sc.[M.S.CS]',
      'No. of Students Appeared': 43,
      'No. of Students Passed': 43,
      'Pass Percentage': '100%',
      'Name of the Topper': 'S.Sandhya',
      'Percentage/CGPA': '9.55',
    },
    {
      'Academic Year': '2020 - 2023',
      'Group': 'Total',
      'No. of Students Appeared': 297,
      'No. of Students Passed': 295,
      'Pass Percentage': '99.3%',
      'Name of the Topper': '',
      'Percentage/CGPA': '',
    },
  ];
  
const Exams = () => {
  return (
<>
  <HalfPageBanner name="Examination Branch" />
  <div className="container mx-auto my-8">
    <h2 className="text-4xl font-bold mb-4 text-center text-blue-700 p-10">Academic Results</h2>

    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300 text-center">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Academic Year</th>
            <th className="border p-2">Group</th>
            <th className="border p-2">No. of Students Appeared</th>
            <th className="border p-2">No. of Students Passed</th>
            <th className="border p-2">Pass Percentage</th>
            <th className="border p-2">Topper</th>
            <th className="border p-2">Percentage/CGPA</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className="border p-2">{row['Academic Year']}</td>
              <td className="border p-2">{row['Group']}</td>
              <td className="border p-2">{row['No. of Students Appeared']}</td>
              <td className="border p-2">{row['No. of Students Passed']}</td>
              <td className="border p-2">{row['Pass Percentage']}</td>
              <td className="border p-2">{row['Name of the Topper']}</td>
              <td className="border p-2">{row['Percentage/CGPA']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</>

  );
};

export default Exams;

