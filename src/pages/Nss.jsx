import React, { useState, useEffect } from 'react';
import { HalfPageBanner } from '../components/General/Half';
import { collection, doc, getDoc } from 'firebase/firestore'; // Firestore functions
import { db } from './Firebase-config'; // Adjust the path to Firebase config

const Nss = () => {
  const [images, setImages] = useState([]); // State to hold images
  const [loading, setLoading] = useState(true); // Loading state to handle loading feedback

  // Fetch the images array from Firestore
  const fetchImages = async () => {
    try {
      const docRef = doc(collection(db, 'NSS'), 'oDcQlDVzAKBs9mUbdplJ'); // Replace 'yourDocumentID' with the actual document ID
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        const data = docSnap.data();
        if (data && data.Images) {
          setImages(data.Images); // Set the images array from Firestore
          
        } else {
          console.log("No images array found in the document!");
        }
      
      } else {
        console.log("No such document!");
      }

      console.log(images)
    } catch (error) {
      console.error("Error fetching images: ", error);
    } finally {
      setLoading(false); // Stop loading once the fetch is complete
    }
  };

  useEffect(() => {
    fetchImages(); // Fetch images when the component mounts
  }, []);

  return (
    <>
      <HalfPageBanner name={"NSS Program"} />
      <div className='Nss'>
        <h1 className='font-bold text-center text-2xl p-2 m-2'>NSS Programs</h1>

        {/* Display loading message while fetching images */}
        {loading ? (
          <p>Loading images...</p>
        ) : (
          <div className="flex flex-wrap justify-center align-middle md:justify-center space-y-4 md:space-y-0 md:space-x-8">
            {images && images.length > 0 ? (
              images.map((image, index) => (
                <img key={index} src={image} alt={`NSS Image ${index + 1}`} className="w-full md:w-1/4 transition-transform duration-300 lg:hover:scale-110" />
              ))
            ) : (
              <p>No images available.</p>  // Display message if no images are found
            )}
          </div>
        )}

        {/* Static Description */}
        <p className='text-center font-light p-2 m-2'>
          National Service Scheme (NSS) is a youth program in association with the state and Central Governments through universities. 
          Our college has two NSS units, involving regular activities and a special 7-day camp in the adopted village.
        </p>
        <p className='text-center font-light p-2 m-2'>
        The <b className='font-bold'>NSS</b> (National Service Scheme) units at <b className='font-bold'>MJPTBCWRDC</b>, Wargal, play a crucial role in fostering social responsibility and community engagement among our students. Our college hosts two active NSS units, each comprising 100 dedicated members who are committed to making a positive impact both on campus and in the surrounding communities.
        </p>
        <p className='text-center font-light p-2 m-2'>
        The NSS units regularly organize and participate in a variety of programs aimed at improving public health, promoting environmental sustainability, and enhancing social awareness. Key activities include health awareness programs, Clean and Green initiatives, and the observance of important national and international days. Additionally, our NSS volunteers play a pivotal role in maintaining discipline during college events.</p>
        <p className='text-center font-light p-2 m-2'>
        Beyond campus activities, our NSS members are encouraged to engage in external events and workshops, broadening their horizons and contributing to society at large. They also conduct surveys on critical issues like unemployment and education, helping to gather valuable data that can inform future initiatives. Through these diverse activities, the NSS units at MJPTBCWRDC, Warangal, strive to develop a sense of civic duty and leadership in our students, preparing them to be responsible citizens and effective change-makers.</p>
      </div>

      <hr />
    </>
  );
};

export default Nss;
