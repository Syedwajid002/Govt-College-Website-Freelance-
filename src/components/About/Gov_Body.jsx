import PrincipalCard from '../cards/About/PrincipalCard';
import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../pages/Firebase-config'; 


const Gov_Body = () => {
    const [members,setMembers]=useState([]);
    const fetchFaculty = async () => {
      try {
        const docRef = doc(db, 'About', 'GoverningBody');
        const docSnap = await getDoc(docRef);
  
        if (docSnap.exists()) {
          // console.log(docSnap.data())
          const facultyData = docSnap.data().Faculty; // Safely access faculty array
          setMembers(facultyData);
          console.log(members);
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
       // Set the fetched faculty data to state
    }, []);
  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <div className="text-center text-blue-700 text-4xl font-bold mb-8" data-aos="fade-up">
        GOVERNING BODY
      </div>
      <div className='flex flex-wrap justify-center items-center'>
        {members.map((item, index) => (
          <div key={index} className="mb-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2">
            <PrincipalCard name={item.Name} period={item.Description} img={item.Image} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gov_Body;
