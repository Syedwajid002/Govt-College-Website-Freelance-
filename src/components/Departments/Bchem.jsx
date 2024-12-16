import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../pages/Firebase-config'; // Import your Firebase config

const Bchem = () => {
  const [faculty, setFaculty] = useState([]);

  // Function to fetch the "Computers" document from the "Departments" collection
  const fetchFaculty = async () => {
    try {
      const docRef = doc(db, 'Departments', 'BioChem');
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
            className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
            data-aos="fade-up"
          >
            <span className="relative inline-block">
              <span className="relative text-3xl text-blue-700">Department Of Biochemistry</span>
            </span>
          </h2>

          <div className="grid md:grid-cols-2 p-2">
            <ul className="text-base text-gray-700 md:text-lg text-justify" data-aos="fade-up">
              <li className="text-3xl mb-10">About the department</li>
              <li className=''>
              The Department of Biochemistry was started in the year 2019 with one faculty and strength of 36 students. From then onwards it has slowly and steadily picked up and presently it has a strength of 74 students. The Biochemistry Laboratory is well equipped and creates the ambience required for attaining hands-on experience in gaining the experimental skills. The Department rests on a strong system having an application-oriented approach utilizing the infrastructure to learn techniques. The course is offered with Biotechnology and Chemistry, the two most important subjects vital to the understanding of Biochemistry. The faculty endeavours to lay a strong foundation of concepts, in students’ minds. The Motto of the department is to see that every student is made aware of the latest emerging trends and passes out with an Analytical approach towards the subject.
              </li>
            </ul>
            <ul className="text-base text-gray-700 md:text-lg flex flex-col gap-4" data-aos="fade-up">
              <li className="text-3xl">Programmes Offered:</li>
              <li>● BSc-Biochemistry</li>
              <li>● Biotechnology</li>
              <li>● Chemistry (BBC)</li>
            </ul>
          </div>

          <br />

          <p className="text-3xl text-gray-700 font-bold" data-aos="fade-up">
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

export default Bchem;
