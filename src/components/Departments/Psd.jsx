import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../pages/Firebase-config'; // Import your Firebase config
const Psd = () => {

  const [faculty, setFaculty] = useState([]);

  // Function to fetch the "Computers" document from the "Departments" collection
  const fetchFaculty = async () => {
    try {
      const docRef = doc(db, 'Departments', 'PoliticalScience');
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
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="mb-10 md:mx-auto sm:text-center md:mb-12">
          <h2
            className="mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
            data-aos="fade-up"
          >
            <span className="relative inline-block">
              <span className="relative text-3xl text-blue-700 ">Department Of Political Science</span>
            </span>{' '}
          </h2>
          <p className="text-base text-gray-700 md:text-lg" data-aos="fade-up">
          </p>
          <div className=''>
            <ul className="text-base text-gray-700 md:text-lg" data-aos="fade-up">
              <li className='text-3xl p-4 text-justify'>About the department:</li>
              <li className='text-justify'>The political science department for UG Course was established in 2015.  Political Science is a fast growing social science.   It is extremely necessary for every citizen to get acquainted with the political process of the country.  Since Indian Society has very marginal political development, particularly the women section of the society is lagging behind in this context.  So the college has opted Political Science as an optional subject with the intention that it will helpful for the women section of the society particularly minorities and poor section, who have very minimal exposure to the political process as they are totally ignorant of political life.
                Since then the department has been rendering its service for UG courses. The department offers instructions in English media.  Since its inception the department has been rendering remarkable service and witnessing great change in the political understanding and political behavior of the students. </li>
              <br></br>
              <li className='font-bold'>Objectives:</li>
              <li>• To produce  capable and responsible citizens of the country</li>
              <li>• To inculcate moral and civic virtues among the students </li>
              <li>• To provide spirit of research & creativity  among the students</li>
              <li>• To bring electoral literacy awareness among the students</li>
              <li>• To prepare the students for all competitive examinations</li>
            </ul>
            <br></br>
            <p class="text-3xl text-gray-700 font-bold" data-aos="fade-up">
              Faculty:
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
      </div>
    </>
  )
}

export default Psd