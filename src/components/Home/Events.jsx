import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./../../pages/Firebase-config"; // Adjust the path as necessary

const Event = () => {
  const [events, setEvents] = useState([]);

  // Fetch the events data from Firestore
  const fetchEvents = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "HomeEvents"));
      const eventsArray = [];
      querySnapshot.forEach((doc) => {
        eventsArray.push(doc.data());
      });
      setEvents(eventsArray); 
    } catch (error) {
      console.error("Error fetching events data: ", error);
    }
  };

  useEffect(() => {
    fetchEvents(); // Fetch events data when the component mounts
  }, []);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20" data-aos="fade-up">
      <div className="text-center mb-10 lg:mb-12">
        <h2 className="max-w-lg mx-auto mb-5 font-sans text-3xl font-bold tracking-tight text-blue-700 sm:text-4xl sm:leading-none md:mb-6 group">
          <span className="inline-block mb-1 sm:mb-4 font-sans">
            EXPLORE THE ARTISTIC EXPERIENCE AT OUR COLLEGE EVENTS
          </span>
          <div className="h-1 mx-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
        </h2>
        <p className="text-gray-700 lg:text-base lg:max-w-md mx-auto font-sans">
          Immerse yourself in the beauty of our college events, showcasing
          diverse forms of art and creativity.
        </p>
      </div>
      
      <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
        {events.length > 0 ? (
          events.map((event, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
              <a href="/" aria-label={`View ${event.Title}`} className="block">
                <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl" style={{ height: '50vh' }}>
                  <img
                    className="object-cover w-full h-full"
                    src={event.Image} // Use Image from Firestore
                    alt={event.Title} // Use Title from Firestore
                    style={{ objectFit: 'cover', filter: 'blur(0)' }}
                    onMouseEnter={(e) => e.target.style.filter = 'blur(5px)'}
                    onMouseLeave={(e) => e.target.style.filter = 'blur(0)'}
                  />
                  <div className="absolute inset-0 flex items-center justify-center px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                    <p className="mb-4 text-lg font-bold text-gray-100">
                      {event.Title} {/* Event Title from Firestore */}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          ))
        ) : (
          <p>Loading events...</p>
        )}
      </div>
      
      <div data-aos="fade-up" className="text-center">
        <a
          href="/campus"
          aria-label="View Gallery"
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          View gallery
          <svg
            className="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Event;
