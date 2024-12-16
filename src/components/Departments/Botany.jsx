import React, { useEffect, useState } from "react";
import { db } from "../../pages/Firebase-config"; // assuming firebase is configured in a separate file
import { doc, getDoc } from "firebase/firestore"; 

const Botany = () => {
  const [faculty, setFaculty] = useState([]);

  // Function to fetch the "Computers" document from the "Departments" collection
  const fetchFaculty = async () => {
    try {
      const docRef = doc(db, 'Departments', 'Botany');
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
                Department Of Botany
              </span>
            </span>{" "}
          </h2>
          <p
            className="text-base text-gray-700 md:text-lg"
            data-aos="fade-up"
          ></p>
          <div className="grid md:grid-cols-2">
            <ul
              className="text-base text-gray-700 md:text-lg"
              data-aos="fade-up"
            >
              <li className="text-3xl p-4 font-bold">About the department</li>
              <li className="text-justify">
                The department is led by well qualified and committed faculty.
                The team of this department are always engaged in developing the
                optimal teaching and learning technique to deal with and inspire
                the students, during a healthy and friendly atmosphere,
                consistent with their learning capacity. The primary and
                foremost precedence of the Department of Botany is the overall
                development of each and every student of the college.
              </li>
              <br></br>
              <li className="font-bold text2-xl">Objectives</li>
              <li className="text-justify">
                • To achieve academic excellence in basic and applied aspects of
                plant sciences.
              </li>
              <li className="text-justify">
                • To understand the impact of plant diversity in the
                environment.
              </li>
              <li className="text-justify">
                • To inculcate scientific awareness towards protecting diversity
                and Eco-environmental management of plant resources for
                sustainable development.
              </li>
              <li className="text-justify">• To gain knowledge of plant breeding techniques.</li>
              <li className="text-justify">
                • To motivate the students to undertake PG studies in plant
                sciences
              </li>
            </ul>
            <ul
              className="text-base text-gray-700 md:text-lg"
              data-aos="fade-up"
            >
              <li className="text-3xl">Programmes Offered</li>
              <li>● BSc. Bachelor of Science (B.Z.C) </li>
            </ul>
          </div>
          <br></br>
          <p class="text-3xl text-gray-700" data-aos="fade-up">
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
  );
};

export default Botany;
