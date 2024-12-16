import React, { useEffect, useState } from "react";
import { db } from "../../pages/Firebase-config"; // assuming firebase is configured in a separate file
import { doc, getDoc } from "firebase/firestore"; 

const Zoology = () => {
  const [faculty, setFaculty] = useState([]);

  // Function to fetch the "Computers" document from the "Departments" collection
  const fetchFaculty = async () => {
    try {
      const docRef = doc(db, 'Departments', 'Zoology');
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
    <div className="px-4 py-16 mx-auto md:px-24 lg:px-8 lg:py-20">
      {/* Department Header */}
      <div className="mb-10 md:mx-auto sm:text-center md:mb-12">
        <h2 className="mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto" data-aos="fade-up">
          <span className="relative inline-block">
            <span className="relative text-3xl text-blue-700 ">Department Of Zoology</span>
          </span>{' '}
        </h2>
        {/* Department Description */}
        <div className='grid md:grid-cols-2 gap-10 '>
        <ul className="text-base text-gray-700 md:text-lg" data-aos="fade-up">
          <li className='text-3xl p-4 font-bold capitalize'>About the department</li>
          <li className='text-justify'>The Department of Zoology was established in the year 2015. The faculty members from the Department of Zoology are highly qualified, knowledgeable, experienced, dedicated and skilled. We are motivated to impart best teaching methodology to emphasise on basic and applied fields of zoology aided with demo, models, videos, wet laboratory having equipment such as, Compound Microscopes, Water Bath, Dissecting Microscope etc. The academy is structured to make learning beyond the classroom and also arranges various Seminars, Guest lectures, Field visits and Outreach programs.</li>
        </ul>
        <ul className="text-base text-gray-700 md:text-lg" data-aos="fade-up">
        <li className='text-justify text-2xl font-bold'>Objectives</li>
          <li className='text-justify'>● To provide students with knowledge of fundamental principles in zoology that will provide a foundation for their later advanced course in more specific biological subjects.</li>
          <li className='text-justify'>● To make students familiar with animal classification schemes and other applied courses as well as developing an understanding of and ability to apply basic zoological principles</li>
          <li className='text-justify'>● To integrate the laboratory and lecture sections of the course and directed toward teaching students both in the classroom and on the field.</li>
          <li className='text-justify'>● To provide quality education offering skill based programs and motivate the students   for self-employment in applied branches of Zoology.</li>
          <li className='text-justify'>● To inculcate the value based education and entrepreneurial skills among the students.</li>
          <li className='text-justify'>● To create awareness on environmental issues through various activities. </li>
        </ul>
        </div>
        <br />
        {/* Faculty Profiles */}
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
  );
};

export default Zoology;
