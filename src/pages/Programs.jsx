import React, { useState, useEffect } from 'react';
import { HalfPageBanner } from '../components/General/Half';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './Firebase-config'; // Adjust the path to your Firebase config

const Programs = () => {
  const [programs, setPrograms] = useState([]);

  // Function to fetch programs from Firestore
  const fetchPrograms = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'Programs & Events')); // Fetch the collection
      const fetchedPrograms = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); // Map over the documents
      setPrograms(fetchedPrograms); // Set state with the fetched programs
      console.log(fetchedPrograms)
    } catch (error) {
      console.error('Error fetching programs:', error);
    }
  };

  useEffect(() => {
    fetchPrograms(); // Fetch programs on component mount
  }, []);

  return (
    <>
      <HalfPageBanner name={'Programs & Events'} />
      {programs.length > 0 ? (
        programs.map((program) => (
          <div key={program.id}>
            <h1 className='font-bold text-center text-2xl p-2 m-2'>{program.Title}</h1>
            <div className="flex flex-wrap justify-center align-middle md:justify-center space-y-4 md:space-y-0 md:space-x-8">
              {program.Images.map((Image, idx) => (
                <img key={idx} src={Image} alt={`Image ${idx + 1}`} className="w-full md:w-1/3 transition-transform duration-300 lg:hover:scale-110" />
              ))}
            </div>
            <p className='text-center font-light p-2 m-2'>{program.Description}</p>
            <hr />
          </div>
        ))
      ) : (
        <p>Loading programs...</p>
      )}
    </>
  );
};

export default Programs;
