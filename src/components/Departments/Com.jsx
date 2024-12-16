import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../pages/Firebase-config'; // Import your Firebase config

const Com = () => {

  const [faculty, setFaculty] = useState([]);

  // Function to fetch the "Computers" document from the "Departments" collection
  const fetchFaculty = async () => {
    try {
      const docRef = doc(db, 'Departments', 'Commerce');
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
              <span className="relative text-3xl text-blue-700 ">Department Of Commerce</span>
            </span>{' '}
          </h2>
          <p className="text-base text-gray-700 md:text-lg" data-aos="fade-up">
          </p>
          <div className='grid md:grid-cols-2'>
            <ul className="text-base text-gray-700 md:text-lg text-justify" data-aos="fade-up">

              <li className='text-3xl p-4'>About the department:</li>
              <li>: The department is lead by well qualified and committed faculty. The department engages the students in various cognitive activities, like seminars, group discussions, debates etc. The department has the distinction of securing above 100% pass percentage , consistently from its inception, 2015 yr and secured university rank, in the year 2020, in B.Com (computers). Many students  secured admissions , in PG programmes, of Central Universities and campus colleges.
              </li>
              <br></br>
              <li className='font-bold '>Objectives:</li>
              <li>●	To build a strong foundation in the areas of Accounting and Finance</li>
              <li>● To construct knowledge , in the dynamic fields of computers and data analytics.</li>
              <li>● To integrate commerce and computer skills in the times of dynamic environments , in accordance with career aspirations.</li>
              <li>●	To integrate commerce and computer skills in the times of dynamic environments , in accordance with career aspirations.</li>
              <li>●	To enable students to be capable of making decisions at personnel and professional level </li>
              <li>●	To prepare students to explore opportunities in the newly created fields of accounting, computers and data analytics, by giving personalised career guidance.</li>
            </ul>

            <ul className="text-base text-gray-700 md:text-lg" data-aos="fade-up">
              <li className='text-3xl font-bold mb-5'>Programmes Offered:</li>
              <li>●	Bachelor of Commerce ( General)</li>
              <li>●	Bachelor of Commerce ( Computer Applications)</li>
              <li>●	Bachelor of Commerce ( Business Analytics) </li>

            </ul>

            <ul className="text-base text-gray-700 text-justify" data-aos="fade-up">
              <li className='text-justify font-bold text-xl mt-5 mb-5'>Courses Offered:</li>
              <li>●	Financial Accounting</li>
              <li>● Business organisation and management</li>
              <li>● Fundamentals of Information and Technology</li>
              <li>● Foreign Trade</li>
              <li>● Data - driven Decision making</li>
              <li>●  Financial Accounting-II</li>
              <li>● Business Laws</li>
              <li>● Banking and Financial Services  </li>
              <li>● Programming with C & C++</li>
              <li>● Data Analytics Essentials</li>
              <li>● Advanced Accounting</li>
              <li>● Business Statistics-I</li>
              <li>● Relational Database Management System</li>
              <li>● Financial Institutions and Markets </li>
              <li>● Data Analytics Modeling</li>
              <li>● Income Tax</li>
              <li>● Business Statistics-II </li>
              <li>● Corporate Accounting</li>
              <li>● Web Technologies</li>
              <li>● Forecasting & Predictive Analytics </li>
              <li>● Cost Accounting</li>
              <li>● Auditing</li>
              <li>● AdvancedCorporate Accounting</li>
              <li>● Theory and Practice of GST</li>
              <li>● Financial Decision Making-II</li>
            </ul>
            <br></br>
            <br></br>
            <br></br>
            {/* <span className="relative text-3xl text-blue-700 ">Dr. K. Suchitra</span>
            <p className="m-10 text-base text-gray-700 md:text-lg" data-aos="fade-up">

              Dr. K. Suchitra is a Degree Lecturer in Commerce. She qualified SET in 2012 and completed Ph.D. from O.U., in 2020. She has put in 10 years of teaching experience. Her areas of specialization include Accounting and Finance. She worked as a Freelance Production Assistant with EMMRC, Osmania University. She received RBBMR Award for the second Best Paper and a Cash prize at 2nd Annual Commerce National Conference of TCA on “Agricultural Marketing in Telangana'' organized by Palamuru University, on 18th April 2019, received Best Paper Award and a cash prize at Two Day National Conference on “New Vistas in Services Marketing with focus on Financial, Business and Community Services(NCSM’19), organized by the Department of Commerce, University College for Women, Koti, held on February 22nd & 23rd 2019, received Best Paper Award and a Cash prize at 1st Annual Commerce National Conference of TCA on “Digital Commerce – Opportunities and Challenges'' organized by Badruka College of Commerce & Arts, on 7th April 2018 and recipient of Gold Medal for the Best Paper Presentation at National Seminar on “Tourism in India: Prospects and Challenges'', organized by University College for Women, Koti, in January 2018. She has presented papers in 11 National Seminars and Conferences; Published 10 Research articles in National and International Journals. She has delivered lectures as a resource person in Faculty Development Programmes and Workshops. She Co-Authored books on Auditing and Financial Institution and Markets. She contributed lessons for Prof. G. Ram Reddy Centre for Distance Education, Osmania University, Mahatma Gandhi University, and Telugu Akademi. She is a Life member of Indian Accounting Association and Telangana Commerce  </p>
            <br></br> */}
          </div>
          <p class="text-3xl text-gray-700 font-bold mt-5 text-center" data-aos="fade-up">
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
    </>
  )
}

export default Com