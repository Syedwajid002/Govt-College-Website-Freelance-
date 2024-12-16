import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import img1 from './TASK MOU.jpg';
import img2 from './RVM(MEGA HEALTH CAMP).jpg';

const data = [
  {
    'S.No': 1,
    'Student name': "AMREEN FATHIMA",
    'Course': "B.Com (CA)",
  },
  {
    'S.No': 2,
    'Student name': "AMARACHINTHA GOUTHAMI",
    'Course': "B.Sc (MSCS)",
  },
  {
    'S.No': 3,
    'Student name': "KURUVA NEERAJA",
    'Course': "BA (HPE)",
  },
  {
    'S.No': 4,
    'Student name': "METTU RACHANA",
    'Course': "B.Com (Gen)",
  },
  {
    'S.No': 5,
    'Student name': "ANDIGA MADHAVI",
    'Course': "BA (HEP)",
  },
  {
    'S.No': 6,
    'Student name': "MARRI JYOTHI",
    'Course': "B.Sc (BBC)",
  },
  {
    'S.No': 7,
    'Student name': "RACHAMALLA SWATHI",
    'Course': "B.Sc (MPC)",
  },
  {
    'S.No': 8,
    'Student name': "RAVULA PRATHYUSHA",
    'Course': "B.Com (Gen)",
  },
  {
    'S.No': 9,
    'Student name': "DURGAM SUDHISHNAVI",
    'Course': "B.Com (Gen)",
  },
  {
    'S.No': 10,
    'Student name': "KODAPARTHI NIVYA",
    'Course': "B.Com (CA)",
  }
];

const Mou = () => {
    const chartRef = useRef(null);
  
    useEffect(() => {
      const courses = data.map(item => item.Course);
      const uniqueCourses = [...new Set(courses)];
      const courseCounts = {};
  
      uniqueCourses.forEach(course => {
        courseCounts[course] = courses.filter(c => c === course).length;
      });
  
      if (chartRef.current) {
        // Destroy existing chart instance if it exists
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
            maintainAspectRatio: false
          }
        });
      }
    }, []);
  
    return (
      <>
        <div className="container mx-auto my-8">
          <h2 className="text-4xl font-bold mb-4 text-center text-blue-700 p-10">MOU PLACEMENTS ACTIVITY</h2>
          <p className="text-base text-gray-700 md:text-lg" data-aos="fade-up">
            In the academic year 2020-2023, MJPTBCWREIS – Degree colleges have made a MoU with Ethames School of Business Management to train and recruit students in Healthcare management. Under this, as a pilot college our institution got selected and following is the data pertaining to the placements activity.
          </p>
          <br></br>
          <p className="text-base text-gray-700 md:text-lg" data-aos="fade-up">
           MEGHAVI WELLNESS
          </p>
  
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
        </div>
        <div className="container mx-auto my-8">
          <div className="mt-8">
            <canvas ref={chartRef} id="myPieChart" width="400" height="400"></canvas>
          </div>
        </div>
        <div className='w-full flex'>
          <img src={img1} alt="" className='rounded-xl w-1/2 h-1/2'/>
          <img src={img2} alt="" className='rounded-xl w-1/2 h-1/2'/>
        </div>
      </>
    );
  };
  
  export default Mou;