import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../pages/Firebase-config'; // Import your Firebase config

const Language = () => {
  
  const [faculty, setFaculty] = useState([]);

  // Function to fetch the "Computers" document from the "Departments" collection
  const fetchFaculty = async () => {
    try {
      const docRef = doc(db, 'Departments', 'English');
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
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-6xl mb-10 md:mx-auto sm:text-center  md:mb-12 ">
          <h2
            className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
            data-aos="fade-up"
          ></h2>
          <p
            className="text-base text-gray-700 md:text-lg"
            data-aos="fade-up"
          ></p>
          <div class="mx-auto p-4">
            {" "}
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <section data-aos="fade-up">
                <h2 class="text-3xl py-4 text-justify">About the Department</h2>
                <ul class="text-base text-justify">
                  <li class="mb-4">
                    The Department of English is run and supported by 3 highly
                    qualified and diligent faculty.
                  </li>
                  <li class="mb-4">
                    The Department organizes various activities for enhancing
                    students' English Language skills in all the four modules
                    i.e., Listening, Speaking, Reading and Writing (LSRW), by
                    conducting Elocution, Debate, Essay writing competitions,
                    and role plays.
                  </li>
                  <li class="mb-4">
                    The department meets the English Language needs of the
                    students at the undergraduate level and also prepares them
                    to get placed in reputed organizations by teaching interview
                    skills, Resume writing and conducting Mock interviews.
                  </li>
                </ul>
              </section>

              <section data-aos="fade-up">
                <h2 class="text-3xl p-4 text-justify">Objectives</h2>
                <ul class="text-base pl-6 text-justify">
                  <li class="mb-4">
                    ⦿ Encouraging them to think creatively and critically
                  </li>
                  <li class="mb-4">
                    ⦿ Exposing them to a variety of content-rich texts
                  </li>
                  <li class="mb-4">
                    ⦿ Strengthening students' grammar and vocabulary
                  </li>
                  <li class="mb-4">
                    ⦿ Improving students reading and writing skills
                  </li>
                  <li class="mb-4">
                    ⦿ Enhancing students listening and speaking skills
                  </li>
                  <li class="mb-4">
                    ⦿ Imparting to them important life skills and human values
                  </li>
                </ul>
              </section>
            </div>
          </div>

          <br></br>
          <table
            class="w-full text-base text-gray-700 md:text-lg"
            data-aos="fade-up"
          >
            <thead>
              <tr>
                <th class="py-3 px-4 text-justify">Programmes Offered</th>
                <th class="py-3 px-4 text-justify">Courses Offered</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="py-3 px-4 text-justify">
                  <ul>
                    <li>B.A (HEP)</li>
                    <li>B.A (HPE)</li>
                    <li>B.Com (General)</li>
                    <li>B.Com (Computer)</li>
                    <li>B.Com (Business Analytics)</li>
                    <li>B.Sc (BZC)</li>
                    <li>B.Sc (BBC)</li>
                    <li>B.Sc (MPC)</li>
                    <li>B.Sc (MPCs)</li>
                    <li>B.Sc (MSCs)</li>
                    <li>B.Sc (Data Science)</li>
                  </ul>
                </td>
                <td class="py-3 px-4">
                  <ul>
                    <li>English (First Language)</li>
                    <li>English Literature</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>

          <br></br>
          <br></br>
          <p
            className="text-3xl text-gray-700  text-center p-3"
            data-aos="fade-up"
          >
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

export default Language;
