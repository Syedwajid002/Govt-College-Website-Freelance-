import React, { useState, useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const data = [
  ['Year', 'No. of Students attended', 'No. of Students Placed'],
  ['2018-19', 16, 12],
  ['2019-20', 22, 5],
  ['2020-21', 116, 36],
  ['2021-22', 115, 50],
  ['2022-23', 297, 140],
];

const Placements = () => {
  const [view, setView] = useState('table');
  const chartRef = useRef(null);

  useEffect(() => {
    if (view === 'graph') {
      const years = data.slice(1).map(row => row[0]);
      const studentsAttended = data.slice(1).map(row => row[1]);
      const studentsPlaced = data.slice(1).map(row => row[2]);

      if (chartRef.current) {
        if (chartRef.current.chartInstance) {
          chartRef.current.chartInstance.destroy();
        }

        const ctx = chartRef.current.getContext('2d');

        chartRef.current.chartInstance = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: years,
            datasets: [{
              label: 'No. of Students Attended',
              data: studentsAttended,
              backgroundColor: 'rgba(75,192,192,0.2)',
              borderColor: 'rgba(75,192,192,1)',
              borderWidth: 1,
            }, {
              label: 'No. of Students Placed',
              data: studentsPlaced,
              backgroundColor: 'rgba(255,99,132,0.2)',
              borderColor: 'rgba(255,99,132,1)',
              borderWidth: 1,
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }
    }
  }, [view]);

  return (
    <>
      <div className="container mx-auto my-8">
        <h1 className="text-2xl mb-4">PLACEMENTS</h1>

        {/* Toggle Buttons */}
        <div className="mb-4 flex justify-center">
          <button
            className={`mr-4 px-4 py-2 rounded ${view === 'table' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setView('table')}
          >
            Table
          </button>
          <button
            className={`px-4 py-2 rounded ${view === 'graph' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setView('graph')}
          >
            Graph
          </button>
        </div>

        {/* Graph Section */}
        {view === 'graph' && (
          <div className="mb-8">
            <canvas ref={chartRef} id="myBarChart" width="400" height="400"></canvas>
          </div>
        )}

        {/* Table Section */}
        {view === 'table' && (
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  {data[0].map((header, index) => (
                    <th key={index} className="border p-2">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.slice(1).map((row, rowIndex) => (
                  <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-100' : ''}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="border p-2">{cell}</td>
                    ))}
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

export default Placements;
