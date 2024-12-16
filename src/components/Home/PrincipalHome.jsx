import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './../../pages/Firebase-config'; 

const PrincipalHome = () => {
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
    <div className="px-4 py-16 mx-auto w-full sm:max-w-full md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2" data-aos="fade-up">
        <div data-aos="fade-left">
          <div className="card relative my-10 lg:order-first">
            <div className="overflow-hidden border-4 border-blue-500 rounded-full md:w-96 md:h-96 w-60 h-60 mx-auto">
              {principal?.Image ? (
                <img
                  className="object-cover md:w-96 md:h-96 rounded-full w-60 h-60 mx-auto"
                  src={principal.Image}
                  alt={principal.Name}
                  
                />
              ) : (
                <p>Loading image...</p>
              )}
            </div>
          </div>
        </div>
        <div data-aos="fade-right" className='w-full'>
          <div className='my-10 lg:pl-10 w-full'>
            <h5 className="mb-4 text-4xl font-extrabold leading-none text-blue-700">
              MEET OUR PRINCIPAL
            </h5>
            <p className="mb-6 text-gray-900">
              Dear students, parents, and faculty,
            </p>
            <p className="mb-6 text-gray-900">
              It is my pleasure to welcome you to our esteemed institution. Our commitment to excellence in education, nurturing a supportive learning environment, and fostering innovation is unwavering. As we embark on this academic journey together, I encourage each student to embrace the opportunities for growth and success that our institution provides.
            </p>
            <p className="mb-6 text-gray-900">
              Together, let's create a vibrant and inclusive community where curiosity thrives, knowledge is celebrated, and every individual finds their unique path to success. I look forward to a successful and fulfilling academic year for all.
            </p>
            <p className="mb-6 text-gray-900">
              Best regards,
              <br />
              {principal?.Name || "Loading name..."}
            </p>
          </div>
          <hr className="mb-5 border-gray-300 lg:hidden" />
        </div>
      </div>
    </div>
  );
};

export default PrincipalHome;
