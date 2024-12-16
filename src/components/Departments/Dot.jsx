import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../pages/Firebase-config'; // Import your Firebase config

const Dot = () => {
 const [faculty, setFaculty] = useState([]);

  // Function to fetch the "Computers" document from the "Departments" collection
  const fetchFaculty = async () => {
    try {
      const docRef = doc(db, 'Departments', 'Telugu');
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

  useEffect(() => {
    fetchFaculty();
    console.log(faculty);// Set the fetched faculty data to state
     // Set the fetched faculty data to state
  }, []);
  return (
    <>
      <div className="px-4 py-16 mx-auto md:px-24 lg:px-8 lg:py-20">
        <div className="mb-10 md:mx-auto sm:text-center md:mb-12 border p-3 rounded-lg">
          <h2
            className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
            data-aos="fade-up"
          >
            <span className="relative inline-block">
              <h2 class="text-3xl p-4">
                <span className="relative text-3xl text-blue-700 ">
                  Department Of Telugu
                </span>
              </h2>
            </span>{" "}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul class="text-base text-gray-700 md:text-lg" data-aos="fade-up">
                <li className="text-2xl p-4 font-bold text-justify">
                About the Department
                </li>
                <li className="text-justify">
                  Telugu is a primary language spoken in the state of Telangana.
                  The Department of Telugu has been providing language learning
                  skills for the students. This department is being run with two
                  faculty members.
                </li>
                <br />
                <li className="text-2xl font-bold text-justify">Objectives</li>
                <li className="text-justify">
                  ● It inculcates Social Values and morals in the students
                </li>
                <li className="text-justify">
                  ●It enables the students to develop interest towards this
                  language
                </li>
                <li className="text-justify">
                  ●It spread the greatness of Telugu Language, Culture, Art and
                  Tradition as state festivals
                </li>
                <li className="text-justify">
                  ● It brought out the beauty in the Spoken Language
                </li>
              </ul>
            </div>
            <div className="flex flex-row justify-center ">
              <ul
                class="text-base text-gray-700 md:text-lg text-justify"
                data-aos="fade-up"
              >
                <li className="text-2xl p-4 font-bold text-justify">
                  Programmes Offered
                </li>
                <li className="pl-5">● B.A (HEP )</li>
                <li className="pl-5">● B.A (HPE)</li>
                <li className="pl-5">● B.Com (General)</li>
                <li className="pl-5">● B.Com (Computer)</li>
                <li className="pl-5">● B.Com (Business Analytics) </li>
                <li className="pl-5">● B.Sc (BZC)</li>
                <li className="pl-5">● B.Sc (BBC)</li>
                <li className="pl-5">● B.Sc (MPC)</li>
                <li className="pl-5">● B.Sc (MPCs)</li>
                <li className="pl-5">● B.Sc (MSCs)</li>
                <li className="pl-5">● B.Sc ( Data Science)</li>
              </ul>
            </div>
          </div>
          <div>
            <ul
              class="text-base text-gray-700 md:text-lg mt-3 text-justify"
              data-aos="fade-up"
            >
              <li className="text-justify text-2xl font-bold">
                Courses Offered:
              </li>
              <li>● Sahithi Manjeera</li>
              <li>● Sahithi Kinnera</li>
            </ul>
          </div>
          <br />
          <p
            class="text-3xl text-gray-700 md:text-3xl font-bold mt-5"
            data-aos="fade-up"
          >
            Faculty
          </p>
          <br />
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

export default Dot;
