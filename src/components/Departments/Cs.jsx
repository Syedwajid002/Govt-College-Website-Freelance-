import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore"; // Import Firestore methods
import { db } from '../../pages/Firebase-config'; // Import your Firestore configuration

const Cs = () => {
  const [faculty, setFaculty] = useState([]);

  // Function to fetch the "Computers" document from the "Departments" collection
  const fetchFaculty = async () => {
    try {
      const docRef = doc(db, 'Departments', 'Computers');
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
    // console.log(faculty);// Set the fetched faculty data to state
     // Set the fetched faculty data to state
  }, []);

  return (
    <>
      <div className="px-4 py-16 mx-auto md:px-24 lg:px-8 lg:py-20 border">
        <div className="mb-10 md:mx-auto sm:text-center md:mb-12">
          <h2
            className="mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
            data-aos="fade-up"
          >
            <span className="relative inline-block">
              <span className="relative text-3xl text-blue-700">
                Department Of Computer Science
              </span>
            </span>{" "}
          </h2>
          <p className="text-base text-gray-700 md:text-lg" data-aos="fade-up">
            {/* Add static text as needed */}
          </p>

          {/* Static Department Information */}
          <div className="grid md:grid-cols-2 p-3 gap-4">
            <ul className="text-base text-gray-700 md:text-lg" data-aos="fade-up">
              <li className="text-3xl p-4 text-justify">About the department:</li>
              <li className="text-justify">
                The Department of Computer Science is supported by dedicated, well
                qualified and experienced faculty. Department has a well
                established laboratory with 83 computers. The Department organizes
                various activities for enhancing students' computer skills.
              </li>
              <br></br>
              <li className="text-justify">Objectives:</li>
              <li className="text-justify">
                ● pursue advanced education and other creative works in technology
              </li>
              <li className="text-justify">● understand the fundamental principles of Computer Science</li>
              <li className="text-justify">
                ● Graduates will be successfully working in computing professions
              </li>
            </ul>
            <ul className="text-base text-gray-700 md:text-lg text-center pt-10" data-aos="fade-up">
              <li className="text-3xl">Programmes Offered:</li>
              <li>● B.COM(CA)</li>
              <li>● B.COM (BA)</li>
              <li>● BSc.MPCs</li>
              <li>● BSc.MSCs</li>
              <li>● BSc.MSDS</li>
            </ul>
          </div>
          <br></br>
          <p className="text-3xl text-gray-700 font-bold" data-aos="fade-up">
            Faculty
          </p>
          <br></br>

          {/* Dynamically Display Faculty Information */}
          {faculty.length > 0 ? (
            faculty.map((member, index) => (
              <div className="grid md:grid-cols-2 bg-bg p-3 rounded" key={index}>
                <div className="gap-3 flex flex-col justify-center">
                  <h1 className="text-blue-700 text-3xl font-bold pl-3 uppercase">
                    {member.Name} {/* Dynamic Faculty Name */}
                  </h1>
                  <p className="text-justify p-3 text-white">
                    {member.Description} {/* Dynamic Faculty Description */}
                  </p>
                </div>
                <div className="p-3 flex flex-row justify-center">
                  <div className="flex flex-col justify-center items-center rounded-md p-2 h-auto md:w-1/3">
                    <img
                      src={member.Image} // Dynamic Faculty Image URL
                      alt={member.Name}
                      className="p-3 w-full h-full object-contain rounded-full"
                    />
                    <h1 className="text-wrap text-white">
                      {member.Name} {/* Dynamic Faculty Name */}
                    </h1>
                  </div>
                </div>
              </div>
              
            ))
          ) : (
            <p>Loading faculty data...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Cs;
