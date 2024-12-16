import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../pages/Firebase-config'; // Import your Firebase config

const Language = () => {
  const [faculty, setFaculty] = useState([]);

  // Function to fetch the "Computers" document from the "Departments" collection
  const fetchFaculty = async () => {
    try {
      const docRef = doc(db, 'Departments', 'Mathematics');
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
            className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
            data-aos="fade-up"
          >
            <span className="relative inline-block">
              <span className="relative text-3xl text-blue-700 ">Department Of Mathematics</span>
            </span>{' '}
          </h2>
          <p className="text-base text-gray-700 md:text-lg" data-aos="fade-up">
          </p>
          <div className='grid md:grid-cols-2 md:gap-20'>
            <ul className="text-base text-gray-700 md:text-lg text-justify" data-aos="fade-up">
              <li className='text-3xl mb-7'>About the department:</li>
              <li className='text-justify'>
                The department has well qualified young and dynamic faculty members. We believe our students and their performance only can act as perfect testimonials. So our main objective is to impart quality education to our students with best available facilities and devoted students sharing the enthusiasm for mathematics.
              </li>
              <br></br>
              <li>Objectives:</li>
              <li>● have developed problem solving skills.</li>
              <li>● have covered the core topics of advanced mathematics which the department considers appropriate to their degree programme.</li>
              <li>● have learned to apply critical and analytical reasoning and to present logical and concise arguments.</li>
              <li>● be able to understand and present sophisticated mathematical arguments and rigorous proofs.</li>
              <li>● be able to comprehend high levels of abstraction in the study of pure mathematics.</li>
              <li>● have had the opportunity to enhance their investigative, communication and presentation skills.</li>
              <li>● have to apply mathematical concepts and theorems to new situations. </li>
            </ul>

            <ul className="text-base text-gray-700 md:text-lg text-justify flex flex-col gap-3" data-aos="fade-up">
              <li className='text-3xl'>Programmes Offered:</li>
              <li>● Bsc  MPC ( maths, physics, chemistry)</li>
              <li>● Bsc  MPCs ( maths, physics, computer science)</li>
              <li>●	Bsc  MSCs ( maths, statistics, computer science)</li>
              <li>●	Bsc  MSDs ( maths, statistics, data science) </li>
            </ul>
          </div>
          <br></br>
          <ul className="text-base text-gray-700 md:text-lg text-justify" data-aos="fade-up">
            <li className='font-bold text-xl'>Courses Offered:</li>
            <li>●	Differential and integral calculus</li>
            <li>● Differential equations</li>
            <li>● Real Analysis </li>
            <li>● Algebra</li>
            <li>● Linear algebra</li>
            <li>● Numerical analysis</li>
            <li>● Integral transforms</li>
            <li>● Analytical solid geometry</li>
            <li>● Theory of equations</li>
            <li>● Logic & sets</li>
            <li>● Number theory</li>
            <li>● Vector calculus </li>
            <li>● Basic mathematics</li>
            <li>● Mathematics for economics & finance</li>
            <li>● Mathematical modelling. </li>
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
      </div>
    </>
  )
}

export default Language