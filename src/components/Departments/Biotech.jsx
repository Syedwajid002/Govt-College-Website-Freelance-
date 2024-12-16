import React, { useEffect, useState } from "react";
import { db } from "../../pages/Firebase-config"; // assuming firebase is configured in a separate file
import { doc, getDoc } from "firebase/firestore"; 

const Biotech = () => {
  const [faculty, setFaculty] = useState([]);

  // Function to fetch the "Computers" document from the "Departments" collection
  const fetchFaculty = async () => {
    try {
      const docRef = doc(db, 'Departments', 'Biotech');
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
            className="mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
            data-aos="fade-up"
          >
            <span className="relative inline-block">
              <span className="relative text-3xl text-blue-700">
                Department Of Biotechnology
              </span>
            </span>{" "}
          </h2>
          <p
            className="text-base text-gray-700 md:text-lg"
            data-aos="fade-up"
          ></p>
          <div className="grid md:grid-cols-2 p-3 border mt-4 gap-4">
          <ul className="text-base text-gray-700 md:text-lg" data-aos="fade-up">
            <li className="text-3xl p-4 font-bold">About the department</li>
            <li className="text-justify">
              The Department of Biotechnology was organized in 2019 ,when the
              course Biotechnology, Biochemistry,Chemistry (BBC) was
              introduced.Biotechnology department envisions the skill
              development of students that encourages and trains them to apply
              curricular knowledge in Research / Industrial
              applications,appealing to the International community.The
              Department works in collaboration with departments of Biochemistry
              and Chemistry to provide wide spectrum knowledge to the students
              pursuing BtBcC (Biotechnology, Biochemistry,Chemistry) course with
              emphasis on practical experience. The department strives to
              inculcate moral and ethical values enabling the personality
              development of students
            </li>
            <br></br>
          </ul>
          <ul
            className="text-base text-gray-700 md:text-lg text-justify pl-10"
            data-aos="fade-up"
          >
            <li className="text-2xl font-bold text-center mb-5">Courses Offered</li>
            <li>● Cell Biology and Genetics</li>
            <li>● Biological Molecules and Microbiology</li>
            <li>● Molecular biology and r DNA technology</li>
            <li>● Bioinformatics and Biostatistics</li>
            <li>● Plant Biotechnology</li>
            <li>● IPR,Biosafety and Entrepreneurship</li>
            <li>● Animal Biotechnology</li>
            <li>● Immunological Techniques</li>
            <li>● Molecular markers in Plant breeding</li>
            <li>● Basics in Biotechnology</li>
          </ul>
          </div>
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
  );
};

export default Biotech;
