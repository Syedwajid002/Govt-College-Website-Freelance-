import React, { useEffect, useState } from "react";
import { db } from "../../pages/Firebase-config"; // assuming firebase is configured in a separate file
import { doc, getDoc } from "firebase/firestore"; // Import Firestore methods

const Chem = () => {
  const [faculty, setFaculty] = useState([]);

  // Fetch faculty data from Firestore
  const fetchFaculty = async () => {
    try {
      const docRef = doc(db, 'Departments', 'Chemistry');
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
      <div className="px-4 py-16 mx-auto md:px-24 lg:px-8 lg:py-20 border">
        <div className="mb-10 md:mx-auto sm:text-center md:mb-12">
          <h2
            className="mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
            data-aos="fade-up"
          >
            <span className="relative inline-block">
              <span className="relative text-3xl text-blue-700 ">
                Department Of Chemistry
              </span>
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4 p-3">
            <ul
              className="text-base text-gray-700 md:text-lg"
              data-aos="fade-up"
            >
              <li className="text-3xl p-4 text-center font-bold">
                About the department
              </li>
              <li className="text-justify">
                There are two Laboratories well equipped with the necessary instruments/infrastructure to perform experiments in Analytical, Inorganic, Organic, and Physical Chemistry. All the graduation students are comfortably accommodated in these laboratories. The Department is well equipped with the necessary infrastructure and sophisticated instruments like Colorimetry, Conductometry, pH metry, Potentiometry, etc.
              </li>
              <br />
              <li className="text-justify font-bold text-2xl">Objectives</li>
              <li className="text-justify">• To propagate higher education in Chemistry...</li>
              {/* Other static content */}
            </ul>

            <ul className="text-base text-gray-700 md:text-lg" data-aos="fade-up">
              <li className="text-2xl font-bold">Courses Offered</li>
              <li>● BSc.MPC</li>
              <li>● BSc.BZC</li>
            </ul>
          </div>

          <br />
          <p className="text-3xl text-gray-700" data-aos="fade-up">Faculty</p>
          <br />

          {/* Dynamically rendered faculty members */}
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
        </div>
      </div>
    </>
  );
};

export default Chem;
