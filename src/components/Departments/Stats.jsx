import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../pages/Firebase-config'; // Import your Firebase config


const Stats = () => {
  const [faculty, setFaculty] = useState([]);

  // Function to fetch the "Computers" document from the "Departments" collection
  const fetchFaculty = async () => {
    try {
      const docRef = doc(db, 'Departments', 'Statistics');
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // console.log(docSnap.data())
        const facultyData = docSnap.data().Faculty; // Safely access faculty array
        setFaculty(facultyData);
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error fetching faculty:", error);
    }
  };
  
  // Use useEffect to fetch the data when the component mounts
  useEffect(() => {
    fetchFaculty();
    console.log(faculty);// Set the fetched faculty data to state
     // Set the fetched faculty data to state
  }, []);

  return (
    <>
      <div className="px-4 py-16 mx-auto md:px-24 lg:px-8 lg:py-20">
        <div className="mb-10 md:mx-auto sm:text-center md:mb-12">
          <h2
            className="mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
            data-aos="fade-up"
          >
            <span className="relative inline-block">
              <span className="relative text-3xl text-blue-700 ">Department Of Statistics</span>
            </span>{' '}
          </h2>
          <p className="text-base text-gray-700 md:text-lg" data-aos="fade-up">
          </p>
          <div className='grid md:grid-cols-2 md:gap-20'>
            <ul className="text-base text-gray-700 md:text-lg" data-aos="fade-up">
              <li className='text-3xl mb-7 font-bold'>About the department</li>
              <li className='text-justify'>The Department of statistics, in MJPTBCWRDC college was established in 2015.Statistics is offered as the main subject to the following students of program courses. The Department has a well-equipped computer lab where the students get the opportunity and space to connect theoretical knowledge with practical learning.</li>
              <br></br>
              <li>Objectives:</li>
              <li>●	Graduates will be skilled in the fundamental concept of statistics neccessary for the success in industry or higher education. </li>
              <li>●	Graduates will be prepared to pursue career choice in different field like statistical quality control, Bio-statistics, samplling theory,life testing and industrial statistics among many others.</li>
            </ul>

            <ul className="text-base text-gray-700 md:text-lg flex flex-col items-center text-justify gap-5" data-aos="fade-up">
              <li className='text-3xl text-justify'>Programmes Offered:</li>
              <li className='text-justify'>●	B.Sc M.S.Cs (maths, Statistics, computer science) </li>
              <li className='text-justify'>●	B.Sc M.S.Ds ( maths, Statistics,Data science) </li>
              <li className='text-justify'>●	B. Com ( General, Computer applications & Business analytics) </li>
            </ul>
          </div>
          <br></br>
          <ul className="text-gray-700 text-justify mt-10" data-aos="fade-up">
            <li className='text-2xl font-bold'>Courses Offered:</li>
            <li>●	Descriptive statistics and probability </li>
            <li>●	probability Distributions</li>
            <li>●	Statistical methods and Theory of estimation </li>
            <li>●	Statistical Inference </li>
            <li>●	Sampling Theory, Time series, Index numbers & Demand Analysis. </li>
            <li>●	Statistical Quality Control and Reliability </li>
            <li>●	Design of experiments, Vital statistics, Official Statistics and Business forecasting. </li>
            <li>●	Operation Research.</li>
            <li>●	Business statistics - I</li>
            <li>●	Business statistics - II</li>
            <li>●	Data collection, presentation &Interpretation </li>
            <li>●	Data scalling Techniques &Report writing </li>
            <li>●	Big Data Analysis </li>
            <li>●	Statistical Techniques in Data mining </li>
            <li>●	Basic statistics - 1</li>
            <li>●	Basic statistics - 2</li>
          </ul>
          <br></br>
          <br></br>
          <p class="text-3xl text-gray-700 font-bold" data-aos="fade-up">
            Faculty
          </p>
          <br></br>
          {faculty.map((member, index) => (
            <div key={index} className="bg-bg p-3 text-white mb-5">
              <div className="grid md:grid-cols-2 p-3 rounded">
                <div className="gap-3 flex flex-col justify-center">
                  <h1 className="text-blue-700 text-3xl font-bold pl-3 uppercase">
                    {member.Name}
                  </h1>
                  <p className="text-justify text-white p-3">
                    {member.Description}
                  </p>
                </div>
                <div className="p-3 flex flex-row justify-center">
                  <div className="flex flex-col justify-center items-center rounded-md p-2 h-auto md:w-1/3">
                    <img
                      src={member.Image}
                      className="p-3 w-60 h-60 object-contain rounded-full"
                      alt={member.Name}
                    />
                    <h1 className="text-wrap text-white mt-2">{member.Name}</h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <br></br>
        </div>
      </div >
    </>
  )
}

export default Stats