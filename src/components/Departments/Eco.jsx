import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../pages/Firebase-config'; // Import your Firebase config


const Eco = () => {
  const [faculty, setFaculty] = useState([]);

  // Function to fetch the "Computers" document from the "Departments" collection
  const fetchFaculty = async () => {
    try {
      const docRef = doc(db, 'Departments', 'Econimics');
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
     // Set the 
  })

  return (
    <>
      <div className="px-4 py-16 mx-auto md:px-24 lg:px-8 lg:py-20">
        <div className="mb-10 md:mx-auto sm:text-center md:mb-12">
          <h2
            className="mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
            data-aos="fade-up"
          >
            <span className="relative inline-block">
              <span className="relative text-3xl text-blue-700 ">Department Of Economics</span>
            </span>{' '}
          </h2>
          <p className="text-base text-gray-700 md:text-lg" data-aos="fade-up">
          </p>
          <div className='grid md:grid-cols-2 md:gap-10'>
            <ul className="text-base text-gray-700 md:text-lg" data-aos="fade-up">
              <li className='text-3xl mb-7'>About the department</li>
              <li className='text-justify'>The Economics department has experienced ,well qualified and dedicated faculty.The department equips the students with core knowledge relevant for pursuing higher education,research and creative work.The students are given a strong foundation in Indian and Telangana Economy.
                As a dynamic department it encourages students to present case studies enabling them to understand the application of various economic principles.Department encourages students to present seminars,papers,field  visits,club activities etc , also organizes workshops,symposia,state and national level seminars.The department has  interdisciplinary approach where we offers some of our courses to BCOM and BSC students

              </li>
              <br></br>
              <li className='font-bold text-2xl'>Objectives</li>
              <li className='text-justify'>• To understand various economic concepts</li>
              <li className='text-justify'>• To enable students apply  various economic principles for economic policy formulations</li>
              <li className='text-justify'>• To Educate students about fiscal,monetary, and population policies.</li>
              <li className='text-justify'>• To give hands-on experience in statistical application for economic research</li>
              <li className='text-justify'>• To understand the economic situation of country and state in all  aspects</li>
              <li className='text-justify'>• To enable  students to understand international trade</li>
              <li className='text-justify'>• To provide knowledge regarding working of RBI,WORLD BANK,ASIAN BANK etc </li>
              <li className='text-justify'>• To Inculcate fiscal discipline among students.</li>
            </ul>
            <ul className="text-base text-gray-700 md:text-lg" data-aos="fade-up">
              <li className='text-3xl'>Programmes Offered:</li>
              <li>●	 B.A-HPE,B.A-EPH</li>
            </ul>
          </div>
          <br></br>
          <ul className="text-base text-gray-700 md:text-lg text-justify" data-aos="fade-up">
            <li className='font-bold text-xl'>Courses Offered</li>
            <li>●	Micro Economics</li>
            <li>● Macro Economics</li>
            <li>● Public Economics</li>
            <li>● Development Economics</li>
            <li>● Economics of Environment</li>
            <li>● International Economics</li>
            <li>● Statistics for Economics</li>
            <li>● Demography</li>
            <li>● Indian Economy</li>
            <li>● Introduction to Indian Economy</li>
            <li>● Sectors of Indian Economy</li>
            <li>● Business Economics</li>
          </ul>
          <br></br>
          <br></br>
          <p className="text-xl text-gray-700 font-bold" data-aos="fade-up">
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

export default Eco