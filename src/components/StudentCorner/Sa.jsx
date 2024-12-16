import React, { useState, useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const data = [
  {
    'S.no': '1',
    'Name of the student': "RAMYA",
    'Course': "B.Sc.MPC",
    'Batch': '2016 -2019',
  }, {
    'S.no': '2',
    'Name of the student': "GOUNI MOUNIKA",
    'Course': "BA EPH",
    'Batch': '2016-2019'
  }, {
    'S.no': '3',
    'Name of the student': "GOUTHAMI",
    'Course': "B.Sc.BZC",
    'Batch': '2016 - 2019',
  }, {
    'S.no': '4',
    'Name of the student': "M.VANITHA REDDY",
    'Course': "B.Sc.MPCS",
    'Batch': '2016 - 2019',
  }, {
    'S.no': '5',
    'Name of the student': "SAVITHA",
    'Course': "B.Sc.BZC",
    'Batch': '2016 - 2019',
  }, {
    'S.no': '6',
    'Name of the student': "CH.BHAGYAVATHI",
    'Course': "BA EPH",
    'Batch': '2016 - 2019',
  }, {
    'S.no': '7',
    'Name of the student': "CDIVYA",
    'Course': "BA EPH",
    'Batch': '2016 - 2019',
  }, {
    'S.no': '8',
    'Name of the student': "SAMMAKKA",
    'Course': "BA EPH",
    'Batch': '2016 - 2019',
  }, {
    'S.no': '9',
    'Name of the student': "SRAVANTHI",
    'Course': "BA EPH",
    'Batch': '2016 - 2019',
  }, {
    'S.no': '10',
    'Name of the student': "ANUSHA",
    'Course': "BA EPH",
    'Batch': '2016 - 2019',
  },
];

const Sa = () => {
  const [view, setView] = useState('table');
  const chartRef = useRef(null);

  useEffect(() => {
    if (view === 'chart') {
      const courses = data.map(item => item.Course);
      const uniqueCourses = [...new Set(courses)];
      const courseCounts = {};

      uniqueCourses.forEach(course => {
        courseCounts[course] = courses.filter(c => c === course).length;
      });

      if (chartRef.current) {
        if (chartRef.current.chartInstance) {
          chartRef.current.chartInstance.destroy();
        }

        const ctx = chartRef.current.getContext('2d');

        chartRef.current.chartInstance = new Chart(ctx, {
          type: 'pie',
          data: {
            labels: Object.keys(courseCounts),
            datasets: [{
              label: 'Course Distribution',
              data: Object.values(courseCounts),
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)',
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
              ],
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
          }
        });
      }
    }
  }, [view]);

  return (
    <>
      <div className="container mx-auto my-8">
        <h2 className="text-4xl font-bold mb-4 text-center text-blue-700 p-10">STUDENTS ACHIEVEMENT IN TSPLRB – 2023 CONSTABLE RECRUITMENT</h2>
        <p className="text-base text-gray-700 md:text-lg" data-aos="fade-up">
          Career Guidance Cell based on the student’s requirement provided help to identify their career path and also ensure that they are focused in the right direction with regards to their career based on their caliber, scores, interest areas and long term forecasting. As part of this, the team has identified the students who are interested in preparing for the Telangana State Police Services. The Cell with the help of the Lecturers from Arts, Commerce and Sciences, planned for a crash course to ensure the students clear their TSPLRB conducted Prelims exam. Preparation for the students started off early in the final year with a well planned course schedule consisting of quantitative aptitude, logical reasoning, Verbal ability, General Studies, General Knowledge and Current affairs. The Physical Education Department took care of the training of the students for Physical Events. The hard work of the Students and the Staff got paid off when 10 students bagged State Government Jobs as TSPLRB Constables at a very tender age.
        </p>
        <br></br>

        {/* Toggle Buttons */}
        <div className="mb-4 flex justify-center">
          <button
            className={`mr-4 px-4 py-2 rounded ${view === 'table' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setView('table')}
          >
            Table
          </button>
          <button
            className={`px-4 py-2 rounded ${view === 'chart' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setView('chart')}
          >
            Pie Chart
          </button>
        </div>

        {/* Table Section */}
        {view === 'table' && (
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border p-2">S.no</th>
                  <th className="border p-2">Name of the student</th>
                  <th className="border p-2">Course </th>
                  <th className="border p-2">Batch</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                    <td className="border p-2">{row['S.no']}</td>
                    <td className="border p-2">{row['Name of the student']}</td>
                    <td className="border p-2">{row['Course']}</td>
                    <td className="border p-2">{row['Batch']}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Pie Chart Section */}
        {view === 'chart' && (
          <div className="mb-8">
            <canvas ref={chartRef} id="myPieChart" width="400" height="400"></canvas>
          </div>
        )}
      </div>
    </>
  );
};

export default Sa;
