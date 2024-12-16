import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { collection, doc, getDoc } from 'firebase/firestore'; // Import Firestore functions
import { db } from './../../pages/Firebase-config'; // Adjust path as needed
import './Carousel.css'; // Your custom styles

const Carousel = () => {
  const [images, setImages] = useState([]); // State to hold images

  // Fetch the images array from Firestore
  const fetchImages = async () => {
    try {
      const docRef = doc(collection(db, 'Carousel'), '4WaVcmeeMriWfSvrEpiq'); // Adjust the collection and doc ID
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        setImages(docSnap.data().Images); // Set the images array from Firestore
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error fetching images: ", error);
    }
  };

  useEffect(() => {
    fetchImages(); // Fetch images when the component mounts
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className="carousel-container">
      {images.length > 0 ? (
        <Slider {...settings} className="full-screen-carousel">
          {images.map((image, index) => (
            <div key={index}>
              <img className="ff" src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      ) : (
        <p>Loading images...</p>
      )}
      <button className="slick-next custom-arrow" aria-label="Next" />
    </div>
  );
};

export default Carousel;
