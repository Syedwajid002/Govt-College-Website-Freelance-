import React, { useRef, useEffect, useState } from 'react';
import Chart from 'chart.js/auto';

const data = [
  {
    'Batch': '2018 - 2021',
    'S.No': 1,
    'Student name': "T.Baby Prathyusha",
    'Course': "B. SC MSCS",
  }, {
    'Batch': '2018 - 2021',
    'S.No': 2,
    'Student name': "Muddala Akhila",
    'Course': "B. SC MSCS",
  }, {
    'Batch': '2018 - 2021',
    'S.No': 3,
    'Student name': "Thuniki Swathi",
    'Course': "B. SC MSCS",
  }, {
    'Batch': '2018 - 2021',
    'S.No': 4,
    'Student name': "Laxmi Prasanna Koukuntla",
    'Course': "B. SC MSCS",
  }
];

const Tcs = () => {
  const [showTable, setShowTable] = useState(true);
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current && !showTable) { // Only render chart when showTable is false
      const batches = data.map(item => item.Batch);
      const uniqueBatches = [...new Set(batches)];
      const batchCounts = {};

      uniqueBatches.forEach(batch => {
        batchCounts[batch] = batches.filter(b => b === batch).length;
      });

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
              'rgba(75, 192, 192, 0.5)',
            ],
            borderColor: [
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
  }, [showTable]);

  return (
    <>
      <div className="container mx-auto my-8">
        <p className="text-base text-gray-700 md:text-lg" data-aos="fade-up">
          RECRUITEES UNDER TATA CONSULTANCY SERVICES(TCS)
        </p>
        <br></br>

        {/* Toggle Buttons */}
        <div className="mb-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
            onClick={() => setShowTable(true)}
          >
            Show Table
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setShowTable(false)}
          >
            Show Pie Chart
          </button>
        </div>

        {/* Table Section */}
        {showTable && (
          <div className="mb-8">
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
        )}

        {/* Pie Chart Section */}
        {!showTable && (
          <div className="mb-8">
            <canvas ref={chartRef} id="myPieChart" width="400" height="400"></canvas>
          </div>
        )}
      </div>
    </>
  );
};

export default Tcs;
