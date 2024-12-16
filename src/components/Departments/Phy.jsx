import React, { useEffect, useState } from 'react'
import {db} from '../../pages/Firebase-config'
import { getDoc,doc } from 'firebase/firestore';

const Phy = () => {
  const [faculty,setFaculty]=useState([]);

  const fetchFaculty=async ()=>{
    try{
      const docRef=doc(db,"Departments","Physics");
      const docSnap=await getDoc(docRef);
      // console.log(docSnap.data())
      if(docSnap.exists()){
        const getfaculty=docSnap.data().Faculty;
        setFaculty(getfaculty);
      }else{
        console.log("There is no such Doc Found")
      }
    }
    catch(error){
      console.log("In error" +error)
    }
  }

  useEffect(()=>{
    fetchFaculty();
    // console.log(faculty)
  })

  return (
    <>
      <div className="px-4 py-16 mx-auto md:px-24 lg:px-8 lg:py-20">
        <div className="mb-10 md:mx-auto sm:text-center md:mb-12">
          <h2
            className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
            data-aos="fade-up"
          >
            <span className="relative inline-block">
              <span className="relative text-3xl text-blue-700 ">Department Of Physics</span>
            </span>{' '}
          </h2>
          <p className="text-base text-gray-700 md:text-lg" data-aos="fade-up">
          </p>
          <div>
            <ul className="text-base text-gray-700 md:text-lg text-justify" data-aos="fade-up">
              <li className='text-3xl mb-7'>About the department</li>
              <li>The Department of Physics, established in the year 2015,offers undergraduate courses leading to the Bachelor of Science (B.Sc.)degree.In addition, project papers are done in the final semester (VI) by the department.
                Experienced faculty of the department is devoted to develop innovative and analytical approaches to physics learning.Topical seminars are arranged to create teaching-awareness among students

              </li>
            </ul>
          </div>
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
  )
}

export default Phy