import React, { useState, useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const data = [
  {
    'S.No': 1,
    'Student name': "PULIMAMIDI SHRAVANI",
    'Course': "B.Sc (MPCS)",
  }, {
    'S.No': 2,
    'Student name': "PURAMSHETTY SHRAVANI",
    'Course': "BA (HEP)",
  }, {
    'S.No': 3,
    'Student name': "PULLE LAVANYA",
    'Course': "B.Com (CA)",
  }, {
    'S.No': 4,
    'Student name': "GOSKEWAR SRINIJA",
    'Course': "B.Sc (MPCS)", 
  }, {
    'S.No': 5,
    'Student name': "DEVARAKONDA APARNA",
    'Course': "B.Sc (MPCS)", 
  }, {
    'S.No': 6,
    'Student name': "POLE PAVANI",
    'Course': "B.Com (CA)", 
  }, {
    'S.No': 7,
    'Student name': "ANNABOINA DEEPIKA",
    'Course': "B.Com (CA)", 
  }, {
    'S.No': 8,
    'Student name': "DADEPOGU DEVAKUMARI",
    'Course': "B.Com (Gen)", 
  }, {
    'S.No': 9,
    'Student name': "KAVALI SWETHA",
    'Course': "BA (HPE)", 
  }, {
    'S.No': 10,
    'Student name': "RODDA SRAVANTHI",
    'Course': "B.Sc (MSCS)", 
  }, {
    'S.No': 11,
    'Student name': "JUPALLY AKHILA",
    'Course': "B.Sc (MPCS)", 
  }, {
    'S.No': 12,
    'Student name': "BAYI NIKHITHA",
    'Course': "B.Com (CA)", 
  }, {
    'S.No': 13,
    'Student name': "THAPPETLA PRABHUSHA",
    'Course': "B.Sc (MSCS)", 
  }, {
    'S.No': 14,
    'Student name': "LODI JYOTHSNA",
    'Course': "B.Sc (MSCS)", 
  }, {
    'S.No': 15,
    'Student name': "YELMANCHALI POOJA",
    'Course': "B.Sc (MSCS)", 
  }, {
    'S.No': 16,
    'Student name': "SHAIK ASHA",
    'Course': "B.Com (CA)", 
  }, {
    'S.No': 17,
    'Student name': "BOYA GAYATHRI",
    'Course': "B.Sc (MSCS)", 
  }, {
    'S.No': 18,
    'Student name': "BALABADRA SUNANDA",
    'Course': "BA (HPE)", 
  }, {
    'S.No': 19,
    'Student name': "NIMMALA ANUSHA",
    'Course': "B.Com (CA)", 
  }, {
    'S.No': 20,
    'Student name': "BODASU SHYAMALA",
    'Course': "B.Sc (MPC)", 
  }, {
    'S.No': 21,
    'Student name': "KALAVENI NEELIMA",
    'Course': "B.Com (Gen)", 
  }, {
    'S.No': 22,
    'Student name': "REDDY NAGARANI",
    'Course': "BA (HEP)", 
  }, {
    'S.No': 23,
    'Student name': "NELLUTLA INDU",
    'Course': "BA (HPE)",
  }, {
    'S.No': 24,
    'Student name': "GUNJA SRAVANI",
    'Course': "BA (HEP)",
     
  }
]


const YhosTable = () => {
  const [view, setView] = useState('chart');
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
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
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
        <p className="text-base text-gray-700 md:text-lg" data-aos="fade-up">
          YASHODA HOSPITALS
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

        {/* Pie Chart Section */}
        {view === 'chart' && (
          <div className="mb-8">
            <canvas ref={chartRef} id="myPieChart" width="400" height="400"></canvas>
          </div>
        )}

        {/* Table Section */}
        {view === 'table' && (
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border p-2">S.No</th>
                  <th className="border p-2">Student name</th>
                  <th className="border p-2">Course</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                    <td className="border p-2">{row['S.No']}</td>
                    <td className="border p-2">{row['Student name']}</td>
                    <td className="border p-2">{row['Course']}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default YhosTable;