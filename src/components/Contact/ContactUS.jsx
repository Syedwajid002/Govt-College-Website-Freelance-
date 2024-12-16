import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import RED_MARKER from '../Home/map.png';

const ContactUS = ({ google }) => {
  
  const COLLEGE_LOCATION = [17.75094, 78.64809];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const icon = L.icon({
    iconUrl: RED_MARKER,
    iconSize: [40, 40],
    iconAnchor: [12, 12],
    popupAnchor: [0, 0],
});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="container mx-auto py-10 md:py-20">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-semibold mb-4">College Address</h2>
            <p className="text-gray-700">
              MJPTBC WELFARE Residential Degree College For Women
            </p>
            <p className="text-gray-500 mt-4">Phone: 9618029944</p>
            <p className="text-gray-500">Email: mjptbcwrdc.jdpur@gmail.com</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md md:h-96">
            <MapContainer
              center={COLLEGE_LOCATION}
              zoom={13}
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; OpenStreetMap contributors'
              />
              <Marker position={COLLEGE_LOCATION} icon={icon}>
                <Popup>A popup for your marker.</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="md:relative">
            <form
              className="bg-white p-8 rounded-md shadow-md w-full md:w-96"
              onSubmit={handleSubmit}
            >
              <h2 className="text-2xl font-semibold mb-4">Contact Form</h2>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
