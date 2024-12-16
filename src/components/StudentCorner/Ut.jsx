import React, { useState, useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const data = [
  {
    'Batch': '2019 - 2022',
    'S.No': 1,
    'Student name': "Abavati Sindhu",
    'Course': "B.Sc. MSCs",
  }, {
    'Batch': '2019 - 2022',
    'S.No': 2,
    'Student name': "Manjula",
    'Course': "B.Sc. MSCs",
  }, {
    'Batch': '2019 - 2022',
    'S.No': 3,
    'Student name': "Burra Loukya",
    'Course': "B.Sc. MSCs",
  },
];

const Ut = () => {
  const [view, setView] = useState('table');
  const chartRef = useRef(null);

  useEffect(() => {
    if (view === 'chart') {
      const batches = data.map(item => item.Batch);
      const uniqueBatches = [...new Set(batches)];
      const batchCounts = {};

      uniqueBatches.forEach(batch => {
        batchCounts[batch] = batches.filter(b => b === batch).length;
      });

      if (chartRef.current) {
        if (chartRef.current.chartInstance) {
          chartRef.current.chartInstance.destroy();
        }

        const ctx = chartRef.current.getContext('2d');

        chartRef.current.chartInstance = new Chart(ctx, {
          type: 'pie',
          data: {
            labels: Object.keys(batchCounts),
            datasets: [{
              label: 'Number of Students',
              data: Object.values(batchCounts),
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
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
          RECRUITEES UNDER UNISTRING TECHNOLOGY SOLUTIONS(UTS)
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

export default Ut;
