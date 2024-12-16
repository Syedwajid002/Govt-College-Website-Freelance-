import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using react-router for routing
const Home = () => {
  return (
    <div className="container mx-auto py-10 md:py-20">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Welcome to MJPTBC WELFARE Residential Degree College For Women</h1>
        <p className="text-gray-700">
          Empowering Women Through Quality Education
        </p>
      </div>

      {/* Home Content Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Our Best Practices</h2>
        {/* Add your best practices content here */}
      </div>

      {/* Contact Us Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-700 mb-4">
          If you have any questions or would like to get in touch, please feel free to contact us.
        </p>
        <Link to="/contact-us" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
          Contact Us
        </Link>
      </div>

      {/* Add more sections or content as needed */}
    </div>
  );
};

export default Home;
