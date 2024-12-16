import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './Firebase-config'; 

const Principal = () => {
  const [principal, setPrincipal] = useState(null);

  const fetchPrincipalData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Principal"));
      querySnapshot.forEach((doc) => {
        setPrincipal(doc.data()); 
      });
    } catch (error) {
      console.error("Error fetching principal data: ", error);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 100, easing: 'ease-in-out-back' });
    fetchPrincipalData(); 
  }, []);

  return (
    <div className='container mx-auto md:p-10 p-5'>
      <h1 className='text-3xl text-blue-500 uppercase'>Principal</h1>
      <div className='flex md:flex-row items-center gap-10 mt-10 bg-bg rounded-lg p-4 flex-col'>
        {principal?.Image ? (
          <img
            src={principal.Image}
            alt={principal.Name || "Principal"}
            className='rounded-lg md:w-1/4 object-cover'
          />
        ) : (
          <p>Loading image...</p>
        )}
        <div>
          <h1 className='text-3xl font-bold text-white text-center md:text-left'>
            {principal?.Name || "Loading name..."}
          </h1>
          <h1 className='text-white mt-5'>Principal Of (MJPTBCWREIS) Telangana</h1>
          <h1 className='text-red-500'>Message from principal</h1>
          <p className='text-white mt-3'>
            I welcome you to one of the most reputed BC Welfare Degree Colleges in Telangana. MJPTBCWRDC, Wargal towers above all the other BC Welfare Degree Colleges in the State for we continually endeavor to foster excellence in Knowledge and Education.
            The college aspires to achieve development of talent and the creation of education and allied development (Art, Craft, Music and dance) areas. The college is committed to creating an exemplary learning environment and preparing outstanding academicians, scholars, scientists, bureaucrats, and professionals in various fields, fulfilling careers as social change leaders and trailblazers. Student diversity is strength, and the society consciously seeks to achieve this while helping students from various backgrounds to overcome social and economic disadvantages and encourage them to pursue higher education by providing extensive financial and other institutional support.
            <span className='font-bold'>Wishing you a joyful learning…….</span>
          </p>
        </div>
      </div>
      <p className='mt-3'>
        {principal?.Name || "The principal"} has been working in this college since 2023. His area of specialization is Commerce. He took charge as principal in MJPTBCWRDC, Wargal on 22-June-2023. He is retired as a professor from Govt. Degree College, Siddipet. He has over 40 years of teaching experience.
      </p>
      <h1 className='mt-3'>Email: mjptbcwrdc.jdpur@gmail.com</h1>
      <h1 className="mt-3 font-bold text-xl">Functions</h1>
      <ul className='flex flex-col gap-3 list-disc'>
        <li>Implementation of academic plans, Institutional action plans prepared by concerned in-charges and lecturers.</li>
        <li>Arrange academic extension activities by organizing seminars, workshops and field trips.</li>
        <li>Encourage innovative and best practices.</li>
        <li>Encourage the project works and research activities.</li>
        <li>Supervise Library, Activity areas, Hostel, Kitchen and Dining Hall.</li>
        <li>Submit pay bills, contingent bills and manage finance and accounts promptly.</li>
        <li>Organize NSS and NCC activities in college.</li>
        <li>Conduct meetings with staff, parents, and students.</li>
      </ul>
    </div>
  );
};

export default Principal;
